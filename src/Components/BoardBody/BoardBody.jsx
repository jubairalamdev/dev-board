import React, { useState } from 'react';
import Board from './Board/Board';
import Activities from './Activities/Activities';

const BoardBody = () => {

    const [activities, setActivities] = useState([]);

    const completeBtnHandler = (task) => {
        if (!activities.includes(task)) {
            const newActivities = [...activities, task];
            setActivities(newActivities);
        }
    }

    const clearActivities = () => {
        if (activities.length>0) {
            setActivities([]);
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-4 gap-3'>
            <Board completeBtnHandler={completeBtnHandler} activities={activities}></Board>
            <Activities activities={activities} clearActivities={clearActivities}></Activities>
        </div>
    );
};

export default BoardBody;