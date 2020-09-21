import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppLogger extends Logger {
  info(message: any, context?: string): void {
    super.log(message, context);
  }
}
