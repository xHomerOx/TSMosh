"use strict";
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
pair.value;
function wrapInArray(value) {
    return [value];
}
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers2 = ArrayUtils.wrapInArray(1);
function fetch(_url) {
    return { data: null, error: null };
}
let result = fetch('url');
result.data?.title;
class Person4 {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Customer2 extends Person4 {
}
function echo(value) {
    return value;
}
function echo2(value) {
    return value;
}
echo2(new Customer2('a'));
class Store {
    objects = [];
    add(obj) {
        this.objects.push(obj);
    }
}
let store = new Store();
class CompressibleStore extends Store {
    compress() { }
}
let store2 = new CompressibleStore();
store2.compress();
class SearchableStore extends Store {
    find(name) {
        return this.objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(_category) {
        return [];
    }
}
class Store2 {
    objects = [];
    add(obj) {
        this.objects.push(obj);
    }
    find(property, value) {
        return this.objects.find(obj => obj[property] === value);
    }
}
let store3 = new Store2();
store3.add({ name: 'a', price: 1 });
store3.find('name', 'a');
store3.find('price', 1);
let product = {
    name: 'a',
    price: 1
};
//# sourceMappingURL=index.generics.js.map