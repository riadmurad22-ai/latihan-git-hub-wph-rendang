import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Tambahkan dua import di bawah ini
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provider memberikan akses Redux ke seluruh aplikasi */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
