/* Generic Classes */

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair =  new KeyValuePair<string, string>('1', 'a');
pair.value;

/* Generic Functions */

function wrapInArray<T>(value: T) {
    return [value];
}

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

// let utils = new ArrayUtils();

// let numbers2 = wrapInArray(1);

let numbers2 =  ArrayUtils.wrapInArray(1);

/* Generic Interfaces */

//https://mywebsite.com/users
//https://mywebsite.com/products

interface Result<T> {
    data: T | null,
    error:  string | null
}

function fetch<T>(_url: string): Result<T> {
    return  { data: null, error: null };
}

interface User {
    username: string
}

interface Product {
    title: string
}

let result = fetch<Product>('url');
result.data?.title;

/* Generic Constraints */

interface Person4 {
    name: string;
}

class Person4 {
    constructor(public name: string) {}
}

class Customer2 extends Person4 {}

function echo<T extends { name: string }>(value: T): T {
    return value;
}

function echo2<T extends Person4>(value: T): T {
    return value;
}

echo2(new Customer2('a'));

/* Extending Generic Classes */

interface Product2 {
    name: string,
    price: number
}

class Store<T> {
    protected objects: T[]= [];

    add(obj: T): void {
        this.objects.push(obj);
    }
}

let store =  new Store<Product>();
// store.objects = [];

//Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store2 = new CompressibleStore<Product>();
store2.compress();

//Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this.objects.find(obj => obj.name === name);
    }
}

//Fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(_category: string): Product[] {
        return [];
    }
}

/* The keyof Operator */

class Store2<T> {
    protected objects: T[]= [];

    add(obj: T): void {
        this.objects.push(obj);
    }

    //T is Product
    //keyof T is 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this.objects.find(obj => obj[property] === value);
    }
}

let store3 = new Store2<Product2>();
store3.add({ name: 'a', price: 1 });
store3.find('name', 'a');
store3.find('price', 1);
// store3.find('nonExistentProperty', 'a');

/* Type Mapping */

interface Product3 {
    name: string,
    price: number
}

// interface ReadOnlyProduct {
//     readonly name: string,
//     readonly price: number,
// }

type ReadOnly<T> = {
    //Index signature
    //Keyof operator
    readonly [K in keyof T]: T[K];
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
}

let product: ReadOnly<Product3> = {
    name: 'a',
    price: 1
}

// product.name = 'a';