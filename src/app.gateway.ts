import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): void {
    console.log(client);
    console.log(payload);
    this.server.emit('msgToClient', payload);
  }
}
