/*
Сложные примеры

5*. Работа с Generic, Mapped Types, Type inference №1

Это React Functional Component

function HomeComponent(props: { firstProp: string }) {

    return (

        <div>

            { props.firstProp }

        </div>

    )

}



Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. Подсказка: любой реакт компонент расширяет React.ComponentType<Props>



props: IProps;

interface IProps {

    firstProp: string

}



const t = TMyType<typeof HomeComponent>;
*/
