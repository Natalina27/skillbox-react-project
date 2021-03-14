/*

6*. Работа с Generic, Mapped Types, Type inference №2

Дан namespace JSX. Получить к нему доступ можно после установки пакета @types/react. Мы проделывали это в одном из первых уроков.

    Среди JSX IntrinsicElements есть Элемент DIV, получить доступ к нему можно так:

    type TDivElement = JSX.IntrinsicElements['div'];


Этот тип описывает все свойства, доступные для HTMLDivElement. Напишите такой тип TGetJSXPropsProp, который извлекает все HTML свойства, доступные для любого jsx элемента.


    Пример:

type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {

    some: '1233' // throw error потому что не содержится в атрибутах div

    className: 'handler' // не выкидывает ошибку так как валидно для div элемента

}*/
