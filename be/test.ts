
let ws = new WebSocket("ws://localhost:1337")

// socket opened
ws.addEventListener("open", event => {
  ws.send('Hello world');
});

ws.addEventListener('message', event => {
  console.log(event);
})