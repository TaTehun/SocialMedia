import express, { Express } from 'express';

import { SomiServer } from './setupServer';

class Application {
    public initialize(): void {
      const app: Express = express();
      const server: SomiServer = new SomiServer(app);
      server.start();
    }
}

const application: Application = new Application();
application.initialize();