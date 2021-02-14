// union type: string | number
const strOrNumber: string | number = 2;

//type alias
type strOrNumber = string | number;

const strOrNum: strOrNumber = '2';

//JS
type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;
type StrangeTsTypes = any | unknown | never;

//Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, '3'];
const unionArrayGeneric: Array<string | number> = [3, 4, '5'];

//Tuple массив фиксированной длины
const myTuple: [number, string] = [1, '2'];
const [val1 , val2] = myTuple;

//const [state, setState] = useState();

