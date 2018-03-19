import Action from "../Action";
import SceneReference from "../SceneReference";
import Fact from "../Fact";
import Condition from "../Condition";

export default class ConditionalAction extends Action {
    private conditions: Array<Condition>;

    public constructor(title: string, nextScene: SceneReference, conditions: Array<Condition>) {
        super(title, nextScene);
        this.conditions = conditions;
    }

    public canShow(): boolean {
        return true;
    }

    protected prepare(nextScene: SceneReference): SceneReference {
        return nextScene;
    }

    private validate(facts: Array<Fact>): boolean {
        let conditions = this.conditions;
        let result = false;
        facts.forEach((fact: Fact, i: number) => {
            conditions.forEach((condition: Condition) => {
                result = result && !condition.check(fact);
            });
        });
        return true;
    }
}