import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WSManager } from "./socket/socketManager";

const SERVER_HOST = prompt("hostnme") + ":1337";
export const manager = new WSManager(SERVER_HOST);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ primaryColor: "teal", colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
      <Notifications />
    </MantineProvider>
  </React.StrictMode>
);
