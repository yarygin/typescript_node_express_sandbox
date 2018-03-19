import {Request, Response} from 'express';
import Controller from "../Controller";

export default class SecretController extends Controller {
    public process(request: Request, response: Response): Response {
        return response.json({
            message: 'secret information'
        });
    }
}