"use strict";
function echo3(arg) { return arg; }
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    identifier;
    value;
    constructor(identifier, value) {
        this.identifier = identifier;
        this.value = value;
    }
}
let entity = new Entity('a', 1);
//# sourceMappingURL=index.js.map