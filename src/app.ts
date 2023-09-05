import express, { Express } from 'express';
import databaseConnection from '@root/setupDatabase';
import { config } from '@root/config';
import { SomiServer } from '@root/setupServer';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: SomiServer = new SomiServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
