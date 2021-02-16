//Generics
const myArray: Array<number> = [1, 2, 3];

interface MyArray <T> {
    [N: number]: T
    map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

let variable = myArray[1];
myArray.map((f , index, arr)=> f + 1);
myArray.map(f => `f + ${f}`);

[1, 2, 3].map((f, index, arr) =>f + 1); // [2, 3, 4]
[1, 2, 3].map(f=>`f + ${f}`); // ['f+1', 'f + 2, 'f + 3']

//Generics for functions
