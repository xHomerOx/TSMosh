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
//# sourceMappingURL=index.js.map