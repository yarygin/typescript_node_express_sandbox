import ApiTestController from "../Controller/Api/TestController";
import AuthorizationMiddleware from "../Middleware/AuthorizationMiddleware";
import ApiAboutController from "../Controller/Api/AboutController";
import Route from "../Route";
import ApiIndexController from "../Controller/Api/IndexController";

export default [
    new Route('/api/', 'get', new ApiIndexController(), [new AuthorizationMiddleware()]),
    new Route('/api/about', 'get', new ApiAboutController(), [new AuthorizationMiddleware()]),
    new Route('/api/test', 'get', new ApiTestController(), [new AuthorizationMiddleware()]),
];