import React from "react";
import './style.css';
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds"
import Energy from "../Energy";

//const Dashboard = ({data}) => {
const Dashboard = ({lights, climate, blinds, energyConsumption}) => {

    console.log(lights);  // undefined
    console.log(climate);  // undefined

    return (
        <main className="dashboard">
            <Lights lights={lights}/>
            <Climate temperature={climate.temperature} humidity={climate.humidity}/>
            <Blinds state={blinds} />
            <Energy water={energyConsumption.water} electricity={energyConsumption.electricity}/>
        </main>
    );
};

export default Dashboard;