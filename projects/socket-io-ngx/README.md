### Documentation

This Library is used to implement socket io features in angular application

### Installation

`npm install socket-io-ngx`

### import SocketIoNgxModule in app.module and inject as a Root

```ts
import { SocketIoNgxModule } from 'socket-io-ngx';

const config = { url: 'http://localhost:8888/', options: {} };
 imports: [
    SocketIoNgxModule.forRoot(config)
  ]
```

### use socket service in component

Import SocketIoNgxService in component

```typescript
import { SocketIoNgxService } from 'angular-socket';
constructor(private socketServiceObj: SocketIoNgxService) {}

sendMessage(msg: string) {
    this.socketServiceObj.emit('message', msg);
}
receiveMessage() {
    this.socketServiceObj.on('message', (receivedMessage) => {
      console.log(receivedMessage);
    });
}
```

### Note: In case you are facing CORS errors in your angular app while getting socket library. Just allow cors from your server to * or to particular domain like this:

```javascript
const socketServer = require('http').Server(app);
const io = require('socket.io')(socketServer, {
  cors: {
    origin: 'your client domain',
  }
});
socketServer.listen(8888);
```