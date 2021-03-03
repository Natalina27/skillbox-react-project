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
import React from 'react';

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

class Child extends Constructor{
    public chilfMethod(){
    }

    public  protectedMethod(): number {
        return super.protectedMethod();
    }

    public publicMethod(): number {
        return super.publicMethod();
    }
};

// no - new! yes- extends!
abstract class AbstractClass{
    public abstract abstractField: number;

    public abstract abstractMethod(): number;

    protected protectedMethod(){
        return this.abstractField;
    }
}

class NewChild extends AbstractClass {
    public abstractField: number = 123;

    public abstractMethod(): number {
        return this.protectedMethod();
    }
}

interface MyInterface<T> {
    field:string;
    method(): string;
}

class NewClass<T> implements MyInterface<T> {
    public field: string = '123';
    public conf?: T;

    public method(): string {
        return '';
    }
}

class MyComponent extends React.Component<{prop1: number}, {state1: string}>{
    constructor(props: {prop1: number}){
        super(props);
        this.state = {
            state1: '123'
        }
    }
    public render(){
        return (
            <div> { this.props.prop1}</div>
        )
    }
}