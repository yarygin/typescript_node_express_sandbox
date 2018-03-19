import {Request, Response} from 'express';
import Controller from "../Controller";
import SceneManager from "../Story/SceneManager";
import Story from "../Story/Story";

export default class StoriesController extends Controller {
    private sceneManager: SceneManager;

    constructor() {
        super();
        this.sceneManager = new SceneManager();
    }

    public process(request: Request, response: Response): Response {
        let story = new Story("test story", [], this.sceneManager);
        // console.log(story.play());
        return response.json({
            title: story.title + '?',
            actions: story.play(),
            author: "Masha"
        });
    }
}