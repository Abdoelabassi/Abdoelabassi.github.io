import type React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  fileUrl: string;
  height?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl, height }) => {
  return (
    <div style={{ height }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPlugin()]} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
