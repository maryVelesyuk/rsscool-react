import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import ThemeContextProvider from "./themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
