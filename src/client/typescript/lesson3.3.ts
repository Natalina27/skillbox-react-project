//Objects
const myObj: { a: number, b: string } = { a: 1, b: '2'};
//Type alias
type myObjType = { a: number, b: string };
const myObj1: myObjType = { a: 1, b: '2'};

//Interface
interface MyFirstInterface {
    a: number;
    b: string;
    c: number[];
}

const myObj2: MyFirstInterface = {
    a: 2,
    b: '123',
    c: [1,2]
};

const {a} = myObj2;
console.log(a);

//readonly (API)
interface MyInterface {
    readonly a: number;
    b: string;
    c: number[];
}
const myObj3: MyInterface = {
    a: 2,
    b: '123',
    c: [1,2]
};
//myObj3.a = 3;

//Optional type ? (or type or undefined )(not reccomended)
interface MyInterface1 {
    a: number;
    b: string;
    c?: number[];
    e: number | undefined
}
const myObj4: MyInterface1 = {
    a: 2,
    b: '123',
    e: undefined
};

if(myObj4.c){
    const val = myObj4.c;
    console.log(val);
}

const obj1 = Object.keys(myObj4);
console.log(obj1);

//IndexSignature
const ApiAnswer: IndexInterface = { key1: 'asd', key2: '123'};

const val3 = ApiAnswer.randomkey;

interface IndexInterface {
    [N: string]: string;
}

