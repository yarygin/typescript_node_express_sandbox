import Action from "../Action";
import SceneReference from "../SceneReference";

export default class LinkAction extends Action {
    public canShow(): boolean {
        return true;
    }

    protected prepare(nextScene: SceneReference): SceneReference {
        return nextScene;
    }
}