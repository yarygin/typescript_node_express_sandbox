import IndexController from "./Controller/IndexController";
import AboutController from "./Controller/AboutController";
import TestController from "./Controller/TestController";
import StoriesController from "./Controller/StoriesController";
import Route from "./Route";

export default class RouteCollection {
    readonly definitions: Array<Route>;

    constructor() {
        this.definitions = [
            new Route('/', 'get', new IndexController()),
            new Route('/about', 'get', new AboutController()),
            new Route('/test', 'get', new TestController()),
            new Route('/stories', 'get', new StoriesController()),
        ]
    }
}

