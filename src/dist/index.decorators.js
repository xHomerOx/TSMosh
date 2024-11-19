"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component2(options) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
let ProfileComponent2 = class ProfileComponent2 {
};
ProfileComponent2 = __decorate([
    Component2({ selector: '#my-profile' })
], ProfileComponent2);
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
let ProfileComponent3 = class ProfileComponent3 {
};
ProfileComponent3 = __decorate([
    Component2({ selector: '#my-profile' }),
    Pipe
], ProfileComponent3);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    };
}
class Person5 {
    say(message) {
        console.log('Person says ' + message);
    }
}
let person2 = new Person5();
person2.say('Hello');
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Person6 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return null;
    }
}
__decorate([
    Capitalize
], Person6.prototype, "fullName", null);
let person3 = new Person6('Otello', 'Boz Maraldo');
console.log(person3.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    password;
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user2 = new User('123');
user2.password = '1';
console.log(user2.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
//# sourceMappingURL=index.decorators.js.map