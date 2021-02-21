//Old constructor example
// function OldConstructor(fieldValue){
//     this.field = fieldValue || 123;
// }
//
// OldConstructor.prototype.method = function (){
//     return this.field
// }
//
// const instance = new OldConstructor();
// instance.method(); // 123

//New
class Constructor{
    public field: number = 123;
    private privateField: number = 123456;

    constructor(arg: number) {
        this.field = arg;
    }

    public publicMethod(){
        return this.field
    }

    protected protectedMethod(){
        return this.field + 10;
    }

    private privateMethod(){
        return this.field + 30;
    }
}

const instance = new Constructor(123);