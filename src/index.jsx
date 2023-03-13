import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import smartHomeData from "./smartHomeData";

const App = () => {

    return (
        <div id="app" className="container">
            <Header title="Chytrý dům"/>
            <Dashboard {...smartHomeData}/>
        </div>
    );
};

createRoot(
    document.querySelector('#app'),
).render(<App/>);