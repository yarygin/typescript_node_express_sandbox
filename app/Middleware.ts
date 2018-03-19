import {NextFunction, Request, RequestHandler, Response} from 'express';

export default abstract class Middleware {
    public abstract process(request: Request, response: Response, next: NextFunction);
}