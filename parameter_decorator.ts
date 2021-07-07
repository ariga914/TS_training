function paramDecorator(target: Object,  propertyKey: string | symbol, parameterIndex: number) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
    return;
}

class ExampleParam {
    name: string = "John";

    say(@paramDecorator s: string) {
        console.log(`${s}, ${this.name}`);
    }
}

const exp = new ExampleParam();
exp.say("Hello");
