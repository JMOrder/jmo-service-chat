import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody, ConnectedSocket, WsResponse } from '@nestjs/websockets';
import { Client, Server } from "socket.io";

@WebSocketGateway(80)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('event')
  handleMessage(@ConnectedSocket() client: Client, @MessageBody() payload: string): WsResponse<unknown> {
    return { event: "event", data: payload };
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Client) {
    this.logger.log(`Client disconnected: ${client}`);
  }

  handleConnection(client: Client, ...args: any[]) {
    this.logger.log(`Client connected: ${client}`);
  }
}
