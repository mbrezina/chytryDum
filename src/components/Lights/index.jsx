import React from "react";
import './style.css';
import {Light} from "../Light/Light";

export const Lights = ({lights}) => {
    return (
        <div className="lights">
            {
                lights.map((light) => (
                        <Light
                            key={light.name}
                            roomName={light.name}
                            state={light.state}/>
                    )
                )
            }
        </div>
    );
};

