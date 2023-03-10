import React from "react";
import './style.css';
import {Lights} from "../Lights";


export const Dashboard = ({lights, climate, blinds, energyConsumption}) => {

//console.log(lights);
    return (
        <main className="dashboard">
            <Lights/>
        </main>
    );

};