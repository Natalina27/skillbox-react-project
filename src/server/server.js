//const express = require('express');
import express from 'express';
import ReactDOM from 'react-dom/server';
import {indexTemplate} from './indexTemplate';
import { Header } from '../shared/Header/Header.jsx';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Header())),
    );
});

app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});