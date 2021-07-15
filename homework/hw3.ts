function required(message: string) {
    return function(target: any, propertyKey: string) {
        let value: string;
        const getter = () => {
            return value;
        };

        const setter = (naming: string) => {
            if(naming.length === 0) {
                console.log(message);
            } else {
                value = naming;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}

class Personality {
    @required("Name is required!")
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    show() {
      console.log(this.name)
    }
}
const firstMan = new Personality("");
firstMan.show();
const secondMan = new Personality("Juan");
secondMan.show();