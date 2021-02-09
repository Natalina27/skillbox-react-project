//Core
import * as  React from 'react';
import { hot } from 'react-hot-loader/root';
import {useState} from 'react';

//Styles
import Styles from './Header.css';
const HeaderComponent = () => {

    const [state, setState] = useState(false);

    return (
        <header>
            <h1>HELLO REACT !</h1>
            <h1 className={Styles.example}>HMR - Hot Module Replacement Example</h1>
            <button onClick={() => setState(!state)}>
                {state ? 'hide' : 'show'}
            </button>
            {state && <h3> Here I'm here 123 !</h3>}
            <p>
                It replace code without page reloading 123 !
            </p>
            <b>I edit code now</b>
        </header>
    )
}

export const Header = hot(() => <HeaderComponent/>);
