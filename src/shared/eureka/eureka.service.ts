import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { Eureka } from 'eureka-js-client';
import { AppLogger } from '../app-logger/app-logger.service';

@Injectable()
export class EurekaService implements OnModuleInit, OnApplicationShutdown {
  readonly client: Eureka;
  constructor(private appLogger: AppLogger) {
    this.appLogger.setContext("EurekaService");
    this.client = new Eureka({
      // application instance information
      instance: {
        app: "chat-service",
        hostName: "localhost",
        instanceId: "chat-service",
        ipAddr: "127.0.0.1",
        port: {
          $: parseInt(process.env.PORT) || 3000,
          "@enabled": true
        },
        statusPageUrl: "http://localhost:3001/actuator/info",
        healthCheckUrl: "http://localhost:3001/actuator/info",
        vipAddress: "chat-service",
        dataCenterInfo: {
          "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
          name: "MyOwn"
        }
      },
      eureka: {
        // eureka server host / port
        host: "127.0.0.1",
        port: 8761,
        servicePath: "/eureka/apps/",
        fetchRegistry: true,
        registerWithEureka: true,
        maxRetries: 10,
        requestRetryDelay: 2000
      },
      logger: appLogger
    });
  }
  onModuleInit() {
    this.client.start((error) => {
      if (error) {
        return this.appLogger.error(error);
      }
      this.appLogger.info("Chat Server registered");
    });
  }
  onApplicationShutdown(signal?: string) {
    return new Promise((resolve, reject) => {
      this.client.stop((error) => {
        if (error) {
          this.appLogger.error(error);
          return reject()
        }
        this.appLogger.info("Chat Server de-registered");
        return resolve()
      });
    });
  }
}
