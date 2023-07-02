## To start the server : 
```bash 
    node server.js
```

## now go to browser and in console type : 
```bash 
    ws = new WebSocket("ws://localhost:4000");
    ws.onmessage = msg => console.log(msg.data);
```
