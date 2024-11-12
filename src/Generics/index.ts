//Convert the function below to a generic function:

function echo3<T>(arg: T) { return arg; }

//When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}

//An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.

class Entity<K, V> {
    constructor(public identifier: K, public value: V) {}
}

let entity =  new Entity<string, number>('a', 1);

//Given the following interface, what does keyof User return?

interface User {
    userId: number;
    username: string;
}

type UserKeys = keyof User; // UserKeys = "userId" | "username"