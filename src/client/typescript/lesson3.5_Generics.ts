//Generics
const myArray: MyArray<number> = [1, 2, 3];

interface MyArray <T>{
    [N: number]: T
}

let variable = myArray[1];
[1, 2, 3].map(f=>f + 1); // [2, 3, 4]
[1, 2, 3].map(f=>`f + ${f}`); // ['f+1', 'f + 2, 'f + 3']