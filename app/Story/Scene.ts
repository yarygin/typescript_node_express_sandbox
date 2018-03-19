import Fact from "./Fact";
import Action from "./Action";

export default class Scene {
    readonly id: string;
    readonly description: string;
    private actions: Array<Action>;
    private facts: Array<Fact>;

    constructor(description: string, actions: Array<Action>, facts: Array<Fact>) {
        this.description = description;
        this.actions = actions;
        this.facts = facts;
    }

    public play(): Array<Action> {
        return this.actions.filter((action: Action) => {
            return action.canShow();
        });
    }
}