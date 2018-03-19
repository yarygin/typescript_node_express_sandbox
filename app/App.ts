import * as express from "express";
import IndexController from "./Controller/IndexController";
import AboutController from "./Controller/AboutController";
import TestController from "./Controller/TestController";
import StoriesController from "./Controller/StoriesController";
import IsTesterMiddleware from "./Middleware/IsTesterMiddleware";
import {Express} from "express";
import Route from "./Route";
import Middleware from "./Middleware";

export default class App {
    private express: Express;
    private readonly port: number;
    private routes: Array<Route>;

    constructor(_port: number) {
        this.port = _port;
        this.express = express();
        this.routes = [
            new Route('/', 'get', new IndexController()),
            new Route('/about', 'get', new AboutController(), [new IsTesterMiddleware()]),
            new Route('/test', 'get', new TestController()),
            new Route('/stories', 'get', new StoriesController()),
        ];
        this.mountRoutes();
    }

    public run(err: express.Errback) {
        this.express.listen(this.port, err);
    }

    private mountRoutes(): void {
        const router = express.Router();
        this.routes.forEach((route:Route) => {
            route.middlewares.forEach((middleware:Middleware) => {
                router.use(route.path, middleware.asRequestHandler());
            });
            router[route.method](route.path, route.controller.asRequestHandler());
        });
        this.express.use(router);
    }
}

