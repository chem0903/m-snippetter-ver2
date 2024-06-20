import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import App from "./App";
import { AuthUserProvider } from "./provider/AuthUserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthUserProvider>
        <App />
      </AuthUserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
