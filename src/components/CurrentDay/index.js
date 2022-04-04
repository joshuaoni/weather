import React from 'react';

import locationIcon from './assets/location-pin.png';
import './CurrentDay.css';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className='img'></div>
        <div className='gradient'></div>
        <div className='cardInner d-flex flex-column justify-content-between pt-3 pb-2'>
            <div>
                <h2 className='mb-2 font0weight-bold '>{weekday}</h2>
                <p className='mb-0'>{date}</p>
                <p className='d-flex align-items-baseline font-weight-lighter mb-1'>
                    <img width='10' height='15' src={locationIcon} className='mr-1' alt='' />
                    <span>{location}</span>
                </p>
            </div>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

export default CurrentDay;
