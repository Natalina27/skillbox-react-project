import  React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';

function HeaderComponent(){
    const [state, setState] = useState(false);
    return (
        <header>
            <h1>HMR Example</h1>
            <button onClick={() => setState(!state)}>
                {state ? 'hide' : 'show'}
            </button>
            {state && <h3> Here I'm here 123</h3>}
            <p>
                It replace code without page reloading
            </p>
            <b>I edit code now</b>
        </header>
    )
}

export const Header = hot(HeaderComponent);