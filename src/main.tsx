
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

  // Remove loader reliably even if the load event has already fired.
  function removeLoader() {
  const loader = document.getElementById("app-loader");
  if (loader) {
    loader.classList.add("fade-out");
      loader.addEventListener("transitionend", () => loader.remove(), { once: true });
      window.setTimeout(() => loader.remove(), 900);
  }
  }

  if (document.readyState === "complete") {
    removeLoader();
  } else {
    window.addEventListener("load", removeLoader, { once: true });
  }
  