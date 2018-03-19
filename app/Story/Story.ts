import Fact from "./Fact";
import SceneManager from "./SceneManager";
import Scene from "./Scene";
import SceneReference from "./SceneReference";
import {isNull} from "util";
import Action from "./Action";

export default class Story {
    readonly title: string;

    private facts: Array<Fact>;

    private sceneManager: SceneManager;

    private initialScene: Scene;

    public constructor(title: string, facts: Array<Fact>, sceneManager: SceneManager) {
        this.title = title;
        this.facts = facts;
        this.sceneManager = sceneManager;
        this.initialScene = sceneManager.loadSceneByReference(new SceneReference('test_story.init_scene'));
    }

    public play() {
        let currentScene = this.initialScene;
        console.log(currentScene);
        while (!isNull(currentScene)) {
            console.log(currentScene.description);
            let actions = currentScene.play();
            if (actions.length === 0) {
                return;
            }
            actions.forEach((action: Action, i: number) => {
                console.log(++i + ": " + action.title);
            });
            let selectedAction = null;
            do {
                selectedAction = this.resolveAction(actions, 0);
            }
            while (isNull(selectedAction));
            let nextSceneReference = selectedAction.process();
            currentScene = this.sceneManager.loadSceneByReference(nextSceneReference);
        }
    }

    private resolveAction(actions: Array<Action>, selectedActionIndex: number): Action {
        if (!actions[selectedActionIndex]) {
            return null;
        }
        return actions[selectedActionIndex];
    }
}