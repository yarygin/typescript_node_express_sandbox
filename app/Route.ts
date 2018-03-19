import Controller from "./Controller";

export default class Route {
    readonly path: string;
    readonly method: string;
    readonly controller: Controller;

    constructor(path: string, method: string, controller: Controller) {
        this.path = path;
        this.method = method;
        this.controller = controller;
    }
}

