import express, { Express } from 'express';
import databaseConnection from './setupDatabase';
import { config } from './config';
import { SomiServer } from './setupServer';

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
