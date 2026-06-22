
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Remove the loader after the app renders
window.addEventListener("load", () => {
  const loader = document.getElementById("app-loader");
  if (loader) {
    loader.classList.add("fade-out");
    loader.addEventListener("transitionend", () => loader.remove());
  }
});
  