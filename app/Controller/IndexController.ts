import {Request, Response} from 'express';
import Controller from "../Controller";

export default class IndexController extends Controller {
    public process(request: Request, response: Response): Response {
        return response.json({
            message: 'super index message'
        });
    }
}