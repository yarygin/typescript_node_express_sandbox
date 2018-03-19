import * as express from "express";
import {Express} from "express";
import Route from "./Route";
import Middleware from "./Middleware";
import appRoutes from "./routes"

export default class App {
    private express: Express;
    private readonly port: number;
    private routes: Array<Route> = [];

    constructor(_port: number) {
        this.port = _port;
        this.express = express();
        this.routes = appRoutes;
        this.mountRoutes();
    }

    public run(err: express.Errback) {
        this.express.listen(this.port, err);
    }

    private mountRoutes(): void {
        const router = express.Router();
        this.routes.forEach((route: Route) => {
            route.middlewares.forEach((middleware: Middleware) => {
                router.use(route.path, middleware.process.bind(middleware));
            });
            router[route.method](route.path, route.controller.process.bind(route.controller));
        });
        this.express.use(router);
    }
}

