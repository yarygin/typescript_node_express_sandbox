import Condition from "../Condition";
import Fact from "../Fact";

export default class Equality implements Condition {
    private fact;
    private factName: string;
    private factValue: any;

    constructor(factName: string, factValue: any) {
        this.factName = factName;
        this.factValue = factValue;
    }

    public check(fact: Fact): boolean {
        return fact.name == this.factName && fact.value == this.factValue;
    }
}