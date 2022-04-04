import React from 'react';
import './UpcomingDaysForecast.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({upcomingDays}) => {
    return (
        <div>
            <ul className='weekList d-flex justify-content-between p-0'>
                {upcomingDays.map(day => {
                    return (
                        <UpcomingDaysForecastItem {...day} key={day.weekday}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default UpcomingDaysForecast;
