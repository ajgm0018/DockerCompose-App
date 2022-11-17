import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from "./serviceworker"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />,
);

serviceWorker.register();