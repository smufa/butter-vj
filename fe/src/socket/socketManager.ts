import WebSocket from "ws";

// const ws = new WebSocket("ws://www.host.com/path");

// ws.on("error", console.error);

// ws.on("open", function open() {
//   ws.send("something");
// });

// ws.on("message", function message(data) {
//   console.log("received: %s", data);
// });

class WSManager {
  private ws: WebSocket;

  constructor(host: string) {
    this.ws = new WebSocket("ws://" + host);
    this.ws.on("error", console.error);
    this.ws.on("open", this.open);
    this.ws.on("message", this.message);
  }

  private open() {
    this.ws.send("something");
  }

  private message(data: string) {
    console.log("received: %s", data);
  }

  public send(data: string) {
    this.ws.send(data);
  }

  // publish data to topic
  public publish(topic: string, data: string) {
    this.ws.send(JSON.stringify({ topic, data }));
  }
}
