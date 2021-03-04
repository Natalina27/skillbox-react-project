//Functions
enum Methods {
    add = 0,
    sub = 1,
}

function calculate(method: Methods, left: number, right: number): number {
    switch (method){
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}
console.log('Methods.add', Methods.add);

const sum = calculate(Methods.add,  2,2);

console.log('sum', sum);

//Type alias for functions - better for Functions
const ArrowFunc: TypeFn = () => 2;
type TypeFn = () => number;

//Interface
interface FnInterface {
    (a: number): void;
}

const ArrowFunc1: FnInterface = (value) => value;

//type StrangeTsTypes = any | unknown | never;
// any - NO!
// unknown opposite of any
// never - function that not finish

