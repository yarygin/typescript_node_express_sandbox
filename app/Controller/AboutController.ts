import {Request, Response} from 'express';
import Controller from "../Controller";

export default class AboutController extends Controller {
    public process(request: Request, response: Response): Response {
        let name = request.query.name || 'nobody';
        return response.json({
            message: 'lets talk about ' + name
        });
    }
}