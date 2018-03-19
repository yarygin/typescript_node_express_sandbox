import Middleware from "../Middleware";
import {NextFunction, Request, Response} from "express";

export default class IsTesterMiddleware extends Middleware {
    public process(request: Request, response: Response, next: NextFunction) {
        console.log('middle');
        if (request.query.name === 'test')
            return response.sendStatus(404);
        return next();
    }
}