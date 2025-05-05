import type { Video } from "../types";
import numeral from "numeral";

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
    title: "Supernovae Neutrinos",
    description: "Jost's thesis on Core-collpased Supernova detection ",
    thumbnail: "/thumbnails/typescript-beginners.jpg",
    videoUrl: "/videos/typescript-beginners.mp4",
    duration: "15:30",
    uploadDate: "2025-03-15",
    views: 2350,
  },
  {
    id: "3",
    title: "Building a Video Platform",
    description:
      "Agent Development Kit (ADK) Masterclass: Build AI Agents & Automate Workflows (Beginner to Pro)",
    thumbnail: "/thumbnails/video-platform.jpg",
    videoUrl: "https://www.youtube.com/watch?v=P4VFL9nIaIA",
    duration: "3:12:47",
    uploadDate: "2025-05-05",
    views: Number.parseInt(numeral(14000).format("0.0a")),
  },
];
