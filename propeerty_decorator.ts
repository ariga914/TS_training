console.log("PROPERTY DECORATOR");

function id() {
    return (target: {} | any, name: PropertyKey) => {
        let value: string;
        //The getter returns the value of the property itself.
        const getter = function() {
            return value;
        };

        //setter creates a random string and assign to the property value.
        const setter = function() {
            value = Math.random().toString(36).substr(2, 9);
        };

        //check defineProperty
        Object.defineProperty(target, name, {
            get: getter,
            set: setter,
        });
    };
};

class manKind {
    @id()
    _personID: string = '';

    show() {
        console.log(this._personID);
    }
}

const firstPerosn = new manKind();
firstPerosn.show();
const secondPerson = new manKind();
secondPerson.show();