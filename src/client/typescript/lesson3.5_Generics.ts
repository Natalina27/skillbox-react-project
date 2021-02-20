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
function identity<T>(arg: T): T {
    return arg;
}

let res = identity(123);

function getLength <T extends Array<any>>(arr: T): number{
    return arr.length;
}

getLength([1, '8', true]);

//////////////////////////////////////////////////////////////
interface  IValueWithType<T>{
    type: string;
    value: T
}

function withType<U>(arg: U): IValueWithType<U>{
    return {
        type: typeof arg,
        value: arg
    }
}

const result2 = withType(123);

// Built-in generics

//1. omit
interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

const omittedObject: Omit < IExample <string>, 'isEmpty' | 'value'> = {
    type: 'asd'
};

//2.picked:
const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
    isEmpty: true,
    value: 123
}

//3.partial
const partial: Partial<IExample<object>> = {

}
