/*
3. Типизация функций, используя Generic

В уроке про Generics мы написали интерфейс массива MyArray

interface MyArray<T> {

    [N: number]: T;



добавьте типизацию для метода reduce

reduce();

}



Справка о работе reduce

const initialValue = 0;

[1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6



Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator. На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива

*/
