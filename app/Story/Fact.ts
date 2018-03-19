export default class Fact {
    readonly name: string;
    readonly title: string;
    readonly value: any;

    constructor(name: string, title: string, value: any) {
        this.name = name;
        this.title = title;
        this.value = value;
    }
}