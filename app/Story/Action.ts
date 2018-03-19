import SceneReference from "./SceneReference";

export default abstract class Action {
    readonly title: string;
    private nextScene: SceneReference;

    public constructor(title: string, nextScene: SceneReference) {
        this.title = title;
        this.nextScene = nextScene;
    }

    public process() {
        this.prepare(this.nextScene);
        return this.nextScene;
    }

    public abstract canShow(): boolean;

    protected abstract prepare(nextScene: SceneReference): SceneReference;
}