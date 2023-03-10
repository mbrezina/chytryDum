import React, {useState} from "react";
import './style.css';
import temp from './images/temp.svg'

export const Climate = ({temperature, humidity}) => {

    const [teplota, setTeplota] = useState(temperature);

    const handlePlusClick = () => {
        setTeplota(teplota+1);
    }

    const handleMinusClick = () => {
        setTeplota(teplota-1);
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} alt="teplota a vlhost"/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{teplota}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={handlePlusClick}>+</button>
                <button className="button" onClick={handleMinusClick} >-</button>
            </div>
        </div>
    )
}
