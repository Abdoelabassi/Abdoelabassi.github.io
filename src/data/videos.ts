import type { Video } from "../types";

export const videos: Video[] = [
  {
    id: "1",
    title: "Proton decay at Super-Kamiokande",
    description: "Akera Takenaka thesis on podcast using NotebookLM",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/videos/pdecay.mp4",
    duration: "27:38",
    uploadDate: "2025-04-22",
    views: 1240,
  },
  {
    id: "2",
    title: "TypeScript for Beginners",
    description:
      "A complete guide to TypeScript for beginners with practical examples.",
    thumbnail: "/thumbnails/typescript-beginners.jpg",
    videoUrl: "/videos/typescript-beginners.mp4",
    duration: "15:30",
    uploadDate: "2025-03-15",
    views: 2350,
  },
  {
    id: "3",
    title: "Building a Video Platform",
    description: "Step-by-step tutorial on building your own video platform.",
    thumbnail: "/thumbnails/video-platform.jpg",
    videoUrl: "/videos/video-platform.mp4",
    duration: "22:45",
    uploadDate: "2025-04-10",
    views: 870,
  },
];
