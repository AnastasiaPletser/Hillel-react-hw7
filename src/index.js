import { createRoot } from "react-dom/client";

import App from "./App";
import CounterProvider from "./CounterProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
