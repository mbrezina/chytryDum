import React, {useState} from "react";
import './style.css';
import lightOffPic from './light-off.svg'
import lightOnPic from './light-on.svg'


export const Light = ({roomName, state}) => {

    const [svetlo, setSvetlo] = useState(state);

    const handleClick = () => {
        svetlo === 'off' ? setSvetlo('on') : setSvetlo('off');
    }

    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={svetlo === "on" ? lightOnPic : lightOffPic} alt={svetlo === "on" ? "light on" : "light off"}/>
            </div>
            <div className="light__name">
                {roomName}
            </div>
        </div>
    )
}
