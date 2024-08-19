// For each of these values, what type will the TypeScript compiler infer? 
let a: number = 100; 
let b: string = 'Coffee'; 
let c: boolean[] = [true, false, false]; 
let d: {age: number} = {age: 20};
let e: number[] = [3];
let f: void;
let g: [] = [];

// What are the compilation errors in each of the following code snippets?
let song: { title: string, releaseYear: number} = { title: 'My song', releaseYear: 2024};
let prices: any[] = [100, 200, 300];
prices[0] = '$100'; 
function myFunc(a: number, b: number): number { 
    a = 20;
    b = 20;
    return a + b;
}