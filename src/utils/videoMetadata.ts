// src/utils/videoMetadata.ts
// author : Claude.ai
import { getVideoDurationInSeconds } from "get-video-duration";
import path from "node:path";
import fs from "node:fs";
import { exec } from "node:child_process";
import ffprobeStatic from "ffprobe-static";

interface VideoMetadata {
  duration: number; // in seconds
  dimensions: {
    width: number;
    height: number;
  } | null;
  format: string | null;
  size: number; // in bytes
  bitrate: number | null; // in kbps
  codec: string | null;
  frameRate: number | null;
}

interface FFProbeData {
  streams: Array<{
    codec_type?: string;
    codec_name?: string;
    width?: number;
    height?: number;
    r_frame_rate?: string;
    bit_rate?: string;
  }>;
  format: {
    format_name?: string;
    duration?: string;
    bit_rate?: string;
  };
}

export async function getVideoMetadata(
  videoPath: string
): Promise<VideoMetadata> {
  // Construct the absolute path to the video in the public folder
  const publicDir = path.join(process.cwd(), "public/videos");
  const absolutePath = path.join(publicDir, videoPath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Video file not found at path: ${absolutePath}`);
  }

  try {
    // Get file size
    const stats = fs.statSync(absolutePath);
    const fileSizeInBytes = stats.size;

    // Use ffprobe to get detailed video metadata
    const ffprobeData: FFProbeData = await new Promise((resolve, reject) => {
      exec(
        `"${ffprobeStatic.path}" -v quiet -print_format json -show_format -show_streams "${absolutePath}"`,
        (error, stdout) => {
          if (error) {
            reject(error);
            return;
          }
          try {
            resolve(JSON.parse(stdout));
          } catch (parseError) {
            reject(parseError);
          }
        }
      );
    });

    // Find the video stream
    const videoStream = ffprobeData.streams.find(
      (stream) => stream.codec_type === "video"
    );

    // Extract metadata from ffprobe results
    const duration = Number.parseFloat(ffprobeData.format.duration || "0");

    let width = null;
    let height = null;
    let codec = null;
    let frameRate = null;

    if (videoStream) {
      width = videoStream.width || null;
      height = videoStream.height || null;
      codec = videoStream.codec_name || null;

      // Parse frame rate (usually in the format '24/1' or similar)
      const frameRateStr = videoStream.r_frame_rate;
      if (frameRateStr) {
        const [numerator, denominator] = frameRateStr.split("/").map(Number);
        frameRate = denominator
          ? numerator / denominator
          : Number.parseFloat(frameRateStr);
      }
    }

    const dimensions = width && height ? { width, height } : null;

    // Get bitrate (either from video stream or from format)
    let bitrate = null;
    if (videoStream?.bit_rate) {
      bitrate = Number.parseInt(videoStream.bit_rate) / 1000; // Convert to kbps
    } else if (ffprobeData.format.bit_rate) {
      bitrate = Number.parseInt(ffprobeData.format.bit_rate) / 1000; // Convert to kbps
    } else if (duration) {
      // Fallback: rough calculation
      bitrate = (fileSizeInBytes * 8) / (duration * 1000);
    }

    // Get format from file extension and ffprobe data
    const fileExtension = path.extname(absolutePath).substring(1); // e.g., 'mp4'
    const formatFromProbe = ffprobeData.format.format_name || null;
    const format = formatFromProbe || fileExtension;

    return {
      duration,
      dimensions,
      format,
      size: fileSizeInBytes,
      bitrate,
      codec,
      frameRate,
    };
  } catch (error) {
    console.error("Error getting video metadata:", error);
    throw error;
  }
}

// Example usage in an Astro component:
/*
// src/pages/video-player.astro
---
import Layout from '../layouts/Layout.astro';
import { getVideoMetadata } from '../utils/videoMetadata';

// Get metadata for a video in the public folder
const videoPath = '/videos/my-video.mp4';
let metadata;
let error = null;

try {
  metadata = await getVideoMetadata(videoPath);
} catch (err) {
  error = err.message;
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
---

<Layout title="Video Player">
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Video Information</h1>
    
    {error ? (
      <div class="bg-red-100 p-4 rounded-lg mb-6">
        <p class="text-red-700">Error: {error}</p>
      </div>
    ) : (
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <video src={videoPath} controls class="w-full rounded-lg shadow-lg"></video>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Metadata</h2>
          
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">Duration:</span>
              <span>{metadata.duration ? formatTime(metadata.duration) : 'Unknown'}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Resolution:</span>
              <span>{metadata.dimensions ? `${metadata.dimensions.width}×${metadata.dimensions.height}` : 'Unknown'}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Format:</span>
              <span>{metadata.format || 'Unknown'}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Codec:</span>
              <span>{metadata.codec || 'Unknown'}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Frame Rate:</span>
              <span>{metadata.frameRate ? `${metadata.frameRate.toFixed(2)} fps` : 'Unknown'}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">File Size:</span>
              <span>{(metadata.size / (1024 * 1024)).toFixed(2)} MB</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Bitrate:</span>
              <span>{metadata.bitrate ? `${Math.round(metadata.bitrate)} kbps` : 'Unknown'}</span>
            </div>
          </div>
        </div>
      </div>
    )}
  </main>
</Layout>
*/
