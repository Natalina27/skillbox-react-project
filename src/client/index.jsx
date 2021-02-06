//Core
import  React from 'react';
import ReactDom from 'react-dom';

//Components
import {Header} from '../shared/Header/Header';

window.addEventListener('load', () => {
    ReactDom.hydrate(<Header/>, document.getElementById('react_root'));
});
//ReactDom.hydrate(<Header/>, document.getElementById('react_root'));

