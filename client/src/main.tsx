import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set favicon dynamically based on environment
const faviconPath = import.meta.env.PROD ? "/public/favicon.png" : "/favicon.png";
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = faviconPath;
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
