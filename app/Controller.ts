import {Request, RequestHandler, Response} from 'express';

export default abstract class Controller {
    public abstract process(request: Request, response: Response): Response;

    public asRequestHandler(): RequestHandler {
        return this.process.bind(this);
    }
}