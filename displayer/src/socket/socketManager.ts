// const ws = new WebSocket("ws://www.host.com/path");

import { notifications } from "@mantine/notifications";

// ws.on("error", console.error);

// ws.on("open", function open() {
//   ws.send("something");
// });

// ws.on("message", function message(data) {
//   console.log("received: %s", data);
// });

export class WSManager {
  private ws: WebSocket;
  constructor(host: string) {
    this.ws = new WebSocket("ws://" + host);
    // Connection opened
    this.ws.addEventListener("open", function (event) {
      console.log("Connected to server");
      notifications.show({
        title: "WEBSOCKET POVEZAN GOR",
        message: "Hehehe 🤥",
      });
    });
    this.ws.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
      notifications.show({
        title: "MSG :)",
        message: event.data,
      });
    });
  }

  // publish data to topic
  public onMessage = (callback: (data: any) => void) => {
    this.ws.addEventListener("message", function (event) {
      callback(event.data);
    });
  };
}
