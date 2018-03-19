import {Request, Response} from 'express';
import Controller from "../../Controller";

export default class TestController extends Controller {
    public process(request: Request, response: Response): Response {
        return response.json({
            success: true
        });
    }
}