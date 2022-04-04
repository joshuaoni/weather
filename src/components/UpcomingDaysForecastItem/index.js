import React from 'react';
import './UpcomingDaysForecastItem.css';

const API_IMG = 'https://www.metaweather.com/static';

const UpcomingDaysForecastItem = ({weekday, temperature, imgUrl}) => {
    return (
        <li className='weekday d-flex flex-column justify-content-center align-items-center p-2'>
            <img alt='' className='mb-2' width='30' src={`${API_IMG}/img/weather/${imgUrl}.svg`} />
            <span className='mb-2'>{weekday}</span>
            <span className='font-weight-bold'>{temperature}&deg;</span>
        </li>
    );
}

export default UpcomingDaysForecastItem;
