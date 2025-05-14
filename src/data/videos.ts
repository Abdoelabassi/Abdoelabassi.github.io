import type { Video } from "../types";
import numeral from "numeral";
import { getVideoMetadata, type VideoMetadata } from "../utils/videoMetadata";
import formatDuration from "format-duration";

type Duration = {
  duation: (video: string) => Promise<VideoMetadata>;
};

const duration = await getVideoMetadata("pdecay.mp4");

const formattedDuration = formatDuration(duration * 1000);

export const videos: Video[] = [
  {
    id: "1",
    title: "Proton decay at Super-Kamiokande",
    description: "Akera Takenaka thesis on podcast using NotebookLM",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/videos/pdecay.mp4",
    duration: formattedDuration,
    uploadDate: "2025-04-22",
    views: numeral(1000).format("0.0a"),
  },
  {
    id: "2",
    title: "Supernovae Neutrinosii",
    description: "Jost's thesis on Core-collpased Supernova detection ",
    thumbnail: "/thumbnails/supernova.jpeg",
    videoUrl: "/videos/typescript-beginners.mp4",
    duration: "",
    uploadDate: "2025-03-15",
    views: numeral(5000).format("0a"),
  },
  {
    id: "3",
    title: "Deep Learning - lesson 4",
    description: "Tera-School of Machine Learning - Desy 2021",
    thumbnail: "/thumbnails/agent.jpeg",
    videoUrl: "/videos/deeplearning540_lesson04-2021-02-24_18.09.02.mkv",
    duration: formatDuration(
      (await getVideoMetadata(
        "deeplearning540_lesson04-2021-02-24_18.09.02.mkv"
      )) * 1000
    ),
    uploadDate: "2025-05-14",
    views: numeral(14000).format("0a"),
  },
  {
    id: "4",
    title: "Deep Learning Lesson 5",
    description: "Tera-School of Machine Learning - Desy 2021",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/videos/deeplearning540_lesson05-2021-02-25_17.48.08.mkv",
    duration: formatDuration(
      (await getVideoMetadata(
        "deeplearning540_lesson05-2021-02-25_17.48.08.mkv"
      )) * 1000
    ),
    uploadDate: "2025-04-22",
    views: numeral(1000).format("0.0a"),
  },
  {
    id: "5",
    title: "Proton decay at Super-Kamiokande",
    description: "Akera Takenaka thesis on podcast using NotebookLM",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/videos/pdecay.mp4",
    duration: formattedDuration,
    uploadDate: "2025-04-22",
    views: numeral(1000).format("0.0a"),
  },
  {
    id: "6",
    title: "Proton decay at Super-Kamiokande",
    description: "Akera Takenaka thesis on podcast using NotebookLM",
    thumbnail: "/thumbnails/pdecay.png",
    videoUrl: "/videos/pdecay.mp4",
    duration: formattedDuration,
    uploadDate: "2025-04-22",
    views: numeral(1000).format("0.0a"),
  },
];
