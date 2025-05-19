import type { Video } from "../types";
import numeral from "numeral";
import { getVideoMetadata, type VideoMetadata } from "../utils/videoMetadata";
import formatDuration from "format-duration";

type Duration = {
  duation: (video: string) => Promise<VideoMetadata>;
};

//const duration = await getVideoMetadata("pdecay.mp4");

//const formattedDuration = formatDuration(duration * 1000);

export const videos: Video[] = [
  {
    id: "1",
    title: "Proton decay at Super-Kamiokande",
    description: "Akera Takenaka thesis on podcast using NotebookLM",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/pdecay.mp4",
    duration: "",
    uploadDate: "2025-04-22",
    views: numeral(1000).format("0.0a"),
  },
  {
    id: "2",
    title: "Supernovae Neutrinos",
    description: "Jost's thesis on Core-collpased Supernova detection ",
    thumbnail: "/thumbnails/supernova.jpeg",
    videoUrl: "/videos/typescript-beginners.mp4",
    duration: "",
    uploadDate: "2025-03-15",
    views: numeral(5000).format("0a"),
  },
  {
    id: "3",
    title: "Solar neurtinos",
    description: "podcast from nine papers, summarized by NotebookLM",
    thumbnail: "/thumbnails/solarneutrino.png",
    videoUrl: "/solarneutrino.mp4",
    duration: "",
    uploadDate: "2025-05-15",
    views: numeral(14000).format("0a"),
  },
];
