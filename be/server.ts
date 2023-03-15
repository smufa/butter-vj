

Bun.serve({
  port: 1337,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed :(", { status: 500 });
  }, // upgrade logic
  websocket: {
    message(ws, message) {
      ws.publish('preset', message);
    }, // a message is received
    open(ws) {
      console.log("Connected");
      ws.subscribe('preset');
    }, // a socket is opened
    close(ws, code, message) {
      ws.unsubscribe('preset');
    }, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
});

