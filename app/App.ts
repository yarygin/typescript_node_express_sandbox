import * as express from "express";
import {Express} from "express";
import IndexController from "./Controller/Api/IndexController";
import AboutController from "./Controller/Api/AboutController";
import TestController from "./Controller/Api/TestController";
import IsTesterMiddleware from "./Middleware/IsTesterMiddleware";
import Route from "./Route";
import Middleware from "./Middleware";

export default class App {
    private express: Express;
    private readonly port: number;
    private routes: Array<Route>;

    constructor(_port: number) {
        this.port = _port;
        this.express = express();
        const apiRoutes = [
            new Route('/api/', 'get', new IndexController()),
            new Route('/api/about', 'get', new AboutController(), [new IsTesterMiddleware()]),
            new Route('/api/test', 'get', new TestController()),
        ];
        this.routes = apiRoutes;
        this.mountRoutes();
    }

    public run(err: express.Errback) {
        this.express.listen(this.port, err);
    }

    private mountRoutes(): void {
        const router = express.Router();
        this.routes.forEach((route: Route) => {
            route.middlewares.forEach((middleware: Middleware) => {
                router.use(route.path, middleware.asRequestHandler());
            });
            router[route.method](route.path, route.controller.asRequestHandler());
        });
        this.express.use(router);
    }
}

