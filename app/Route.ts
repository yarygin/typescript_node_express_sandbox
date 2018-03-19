import Controller from "./Controller";
import Middleware from "./Middleware";

export default class Route {
    readonly path: string;
    readonly method: string;
    readonly controller: Controller;
    readonly middlewares: Array<Middleware> = [];

    constructor(path: string, method: string, controller: Controller, middlewares: Array<Middleware> = []) {
        this.path = path;
        this.method = method;
        this.controller = controller;
        this.middlewares = middlewares;
    }
}

