import Fact from "./Fact";

export default interface Condition {
    check(fact: Fact): boolean;
}