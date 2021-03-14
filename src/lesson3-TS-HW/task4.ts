/*

4. Работа с MappedTypes

interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}



Стандартный generic Partial работает так же как Readonly, только для внешних ключей.



    Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask: MyPartial<IHomeTask> = {

    externalData: {

        value: 'win'

    }

}



type MyPartial<T> = {

    [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]

}


*/
