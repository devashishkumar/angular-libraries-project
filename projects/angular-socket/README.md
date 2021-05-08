### Angular socket io Documentation

### Installation

`npm install angular-socket`

### import AngularSocketModule in app.module and inject as a Root

```ts
import { AngularSocketModule } from 'angular-socket';

const config = { url: 'http://localhost:9898/', options: {} };
 imports: [
    AngularSocketModule.forRoot(config)
  ]
```

### use socket service in component

Import AngularSocketService in component

```typescript
import { AngularSocketService } from 'angular-socket';
constructor(private socketServiceObj: AngularSocketService) {}

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
socketServer.listen(9898);
```