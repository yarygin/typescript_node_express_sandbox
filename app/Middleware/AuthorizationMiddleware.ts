import Middleware from "../Middleware";
import {NextFunction, Request, Response} from "express";

export default class AuthorizationMiddleware extends Middleware {
    public process(request: Request, response: Response, next: NextFunction) {
        const token = request.query.token;
        if (!token) {
            return response.sendStatus(401);
        }
        if (token !== '123456') {
            return response.sendStatus(401);
        }
        return next();
    }
}