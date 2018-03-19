import TestController from "./Controller/TestController";
import AuthorizationMiddleware from "./Middleware/AuthorizationMiddleware";
import AboutController from "./Controller/AboutController";
import Route from "./Route";
import IndexController from "./Controller/IndexController";
import SecretController from "./Controller/SecretController";

export default [
    new Route('/', 'get', new IndexController()),
    new Route('/about', 'get', new AboutController()),
    new Route('/test', 'get', new TestController()),
    new Route('/secret', 'get', new SecretController(), [new AuthorizationMiddleware()]),
];