const http = require('http');
const WebSocketServer = require("websocket").server;

let connection = null;

const httpServer = http.createServer((req, res) => {
    console.log("We have received a request");
});


httpServer.listen(4000, () => {
    console.log("Server listening on port 4000");
});

const websocket = new WebSocketServer({
    "httpServer": httpServer
});

websocket.on("request", request => {

    connection = request.accept(null, request.origin);

    connection.on("open", () => console.log("Opened!!!"));
    connection.on("close", () => console.log("CLOSED!!!"));
    connection.on("message", message => {
        console.log(`Received message ${message.utf8Data}`)
        connection.send(`got your message: ${message.utf8Data}`);
    });

    repeat();
});


function repeat() {
    connection.send(`Message : ${Math.random()}`);

    setTimeout(repeat, 5000);
}