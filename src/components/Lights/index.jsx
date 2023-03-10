import React from "react";
import './style.css';
import {Light} from "../Light/Light";
//export const Lights = (lights) =>

export const Lights = () => {
    const lights = [
        {
            name: 'Obývací pokoj',
            state: 'off',
        },
        {
            name: 'Ložnice',
            state: 'on',
        },
        {
            name: 'Kuchyně',
            state: 'on',
        },
        {
            name: 'Chodba',
            state: 'off',
        }
    ];

    console.log(lights);

    return (
        <div className="lights">
            {
                lights.map(({name, state}) =>
                    (
                        <Light
                            key={name}
                            roomName={name}
                            state={state}/>
                    )
                )
            }
        </div>
    );
};
//
// {
//     cities.map(({name, population, area, district}) =>
//         (
//             <City
//                 key={name}
//                 name={name}
//                 population={population}
//                 area={area}
//                 district={district}/>
//         )
//     )
// }