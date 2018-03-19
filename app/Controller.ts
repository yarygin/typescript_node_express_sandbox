import {Request, RequestHandler, Response} from 'express';

export default abstract class Controller {
    public abstract process(request: Request, response: Response): Response;
}