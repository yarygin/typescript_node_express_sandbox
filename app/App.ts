import * as express from "express";
import IndexController from "./Controller/IndexController";
import AboutController from "./Controller/AboutController";
import TestController from "./Controller/TestController";
import StoriesController from "./Controller/StoriesController";
import IsTesterMiddleware from "./Middleware/IsTesterMiddleware";
import {Express} from "express";

export default class App {
    private express: Express;
    private readonly port: number;

    constructor(_port: number) {
        this.port = _port;
        this.express = express();
        this.mountRoutes();
    }

    public run(err: express.Errback) {
        this.express.listen(this.port, err);
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get('/', (new IndexController()).asRequestHandler());

        router.use('/about', (new IsTesterMiddleware()).asRequestHandler());
        router.get('/about', (new AboutController()).asRequestHandler());

        router.get('/test', (new TestController()).asRequestHandler());
        router.get('/stories', (new StoriesController()).asRequestHandler());

        this.express.use(router);
    }
}

