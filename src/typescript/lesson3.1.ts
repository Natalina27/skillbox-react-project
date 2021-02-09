//JS
const str = 'string';   //typeof str ...-> 'string'
const num = 2;          //typeof num ...-> 'number'
const nan = NaN;        //typeof nun ...-> 'number'
const obj = {};         //typeof obj ...-> 'object'
const arr = [];         //typeof arr ...-> 'object'
const nul = null;       //typeof null ...-> 'null'
const sym = Symbol();   //typeof sym ...-> 'symbol'
const und = undefined;  //typeof und ...-> 'undefined'
const _void = void 0;   //typeof _void ...-> 'undefined'
const bool = true;      //typeof bool ...-> 'boolean'
const fn = () => {};    //typeof fn  ...-> 'function'

//TS
let tsStr: string = 'abc'; // === let tsStr = 'abc'
//JS
function sumJS(arr: any){
    if(arr instanceof Array){
        return arr.reduce((a,b) => a+b, 0);
    }
    throw new Error('type mismatch');
}
//TS
function sumTS(arr: number[]){
        return arr.reduce((a,b) => a+b, 0);
}
//
const tsNumber = 2;
const tsString = '2';

const result = tsNumber + tsString;
console.log(result);
const result1 =  tsString + tsNumber;
console.log(result1);
//const result2 = tsNumber - tsString;
// TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// ℹ ｢wdm｣: Failed to compile.
//console.log(result2);

