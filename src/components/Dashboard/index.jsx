import React from "react";
import './style.css';
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds"
import Energy from "../Energy";

const Dashboard = ({lights, climate, blinds, energyConsumption}) => {

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