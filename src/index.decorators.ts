/* Class Decorators */

function Component(constructor: Function) {
  console.log('Component decorator called');
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
  }
}

@Component
class ProfileComponent {}

/* Parameterized  Decorators */

type ComponentOptions = {
  selector: string;
};

function Component2(options: ComponentOptions) { 
    return (constructor: Function) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        }
    }
}

@Component2({ selector: '#my-profile' })
class ProfileComponent2 {}

/* Decorator Composition */

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@Component2({ selector: '#my-profile' })
@Pipe
//f(g(x))
class ProfileComponent3 {}


/* Method Decorators */

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    }
}

class Person5 {
    say(message: string) {
        console.log('Person says ' + message);
    }
}

let person2 = new Person5();
person2.say('Hello');


/* Accessor Decorators */

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    }
}

class Person6 {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        // return `${this.firstName} ${this.lastName}`;
        // return 0;
        return null;
    }
}

let person3 = new Person6('Otello', 'Boz Maraldo');
console.log(person3.fullName);

/* Property Decorators */

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters`);
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(4)
    password: string;
    
    constructor(password: string) {
        this.password = password;
    }
}

let user2 = new User('123');
user2.password = '1';
console.log(user2.password);

/* Parameter Decorators */

type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    })
}

class Vehicle {
    move(@Watch speed: number) {}
}

console.log(watchedParameters);