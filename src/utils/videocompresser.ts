// video-compression.ts

import { spawn } from "child_process";
import path from "path";
import fs from "fs";

interface CompressionOptions {
  width?: number; // Target width in pixels
  height?: number; // Target height in pixels
  videoBitrate?: string; // Video bitrate (e.g., '500k')
  audioBitrate?: string; // Audio bitrate (e.g., '128k')
  preset?: string; // Compression preset (e.g., 'medium', 'fast', 'slower')
  crf?: number; // Constant Rate Factor (0-51, lower is better quality)
  outputFormat?: string; // Output format (e.g., 'mp4', 'webm')
}

/**
 * Compresses a video file using FFmpeg with the specified options
 * @param inputFilePath Path to the input video file
 * @param outputFilePath Path where the compressed video will be saved
 * @param options Compression options
 * @returns Promise that resolves when compression is complete
 */
export async function compressVideo(
  inputFilePath: string,
  outputFilePath: string,
  options: CompressionOptions = {}
): Promise<string> {
  // Set default options
  const {
    width,
    height,
    videoBitrate = "800k",
    audioBitrate = "128k",
    preset = "medium",
    crf = 23,
    outputFormat = path.extname(outputFilePath).replace(".", "") || "mp4",
  } = options;

  // Build FFmpeg arguments
  const ffmpegArgs = [
    "-i",
    inputFilePath,
    "-c:v",
    "libx264",
    "-preset",
    preset,
    "-crf",
    crf.toString(),
    "-b:v",
    videoBitrate,
    "-c:a",
    "aac",
    "-b:a",
    audioBitrate,
  ];

  // Add resolution parameters if specified
  if (width || height) {
    const scale = `scale=${width || -1}:${height || -1}`;
    ffmpegArgs.push("-vf", scale);
  }

  // Ensure the output format
  ffmpegArgs.push("-f", outputFormat);

  // Add output file path
  ffmpegArgs.push(outputFilePath);

  return new Promise((resolve, reject) => {
    // Ensure output directory exists
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Spawn FFmpeg process
    const ffmpeg = spawn("ffmpeg", ffmpegArgs);

    let stdoutData = "";
    let stderrData = "";

    ffmpeg.stdout.on("data", (data) => {
      stdoutData += data.toString();
    });

    ffmpeg.stderr.on("data", (data) => {
      stderrData += data.toString();
    });

    ffmpeg.on("close", (code) => {
      if (code === 0) {
        resolve(outputFilePath);
      } else {
        reject(
          new Error(`FFmpeg process exited with code ${code}: ${stderrData}`)
        );
      }
    });

    ffmpeg.on("error", (err) => {
      reject(new Error(`Failed to start FFmpeg process: ${err.message}`));
    });
  });
}

/**
 * Batch compress multiple video files
 * @param inputFiles Array of input file paths
 * @param outputDir Output directory
 * @param options Compression options
 * @returns Promise that resolves with an array of output file paths
 */
export async function batchCompressVideos(
  inputFiles: string[],
  outputDir: string,
  options: CompressionOptions = {}
): Promise<string[]> {
  const outputFiles: string[] = [];

  for (const inputFile of inputFiles) {
    const fileName = path.basename(inputFile);
    const outputPath = path.join(outputDir, fileName);

    try {
      const result = await compressVideo(inputFile, outputPath, options);
      outputFiles.push(result);
      console.log(`Successfully compressed: ${fileName}`);
    } catch (error) {
      console.error(`Failed to compress ${fileName}:`, error);
    }
  }

  return outputFiles;
}

// Example usage information
// const options: CompressionOptions = {
//   width: 1280,
//   height: 720,
//   videoBitrate: '800k',
//   audioBitrate: '128k',
//   preset: 'medium',
//   crf: 23,
// };
//
// compressVideo('input.mp4', 'output.mp4', options)
//   .then(outputPath => console.log(`Video compressed: ${outputPath}`))
//   .catch(error => console.error('Compression failed:', error));
