import React from 'react';
import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem';

const CurrentDayDescription = ({todayDetails}) => (
    <div className="mt-4 mt-md-2">
        <div className="d-flex flex-column mb-2">
            {todayDetails.map(item => {
                return (
                    <CurrentDayDescriptionItem {...item} key={item.name}/>
                )
            })}
        </div>
    </div>
);

export default CurrentDayDescription;
