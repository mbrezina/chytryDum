import React, {useState} from "react";
import './style.css';
import blindsOpen from './images/blinds-open.svg'
import blindsClosed from './images/blinds-closed.svg'

const Blinds = ({state}) => {

    const [otevreno, setOtevreno] = useState(state);

    const handleOpen = () => {
        setOtevreno(true);
    }

    const handleClose = () => {
        setOtevreno(false);
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
                {
                    <img src={
                        otevreno ? blindsOpen : blindsClosed
                    } alt={otevreno ? "otevřené" : "zavřené"}/>
                }
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={otevreno ? "button button--active" : "button"} onClick={handleOpen}>Otevřeno</button>
                <button className={otevreno ? "button" : "button button--active"} onClick={handleClose}>Zavřeno</button>
            </div>
        </div>

    )
}

export default Blinds;