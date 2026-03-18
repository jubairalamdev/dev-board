import React, { useState } from 'react';
import Board from './Board/Board';
import Activities from './Activities/Activities';

const BoardBody = () => {

    const [activities, setActivities] = useState([]);

    const completeBtnHandler = (task) => {
        const completeBtn = document.getElementById(`completeBtnId-${task.id}`);
        if (!activities.includes(task)) {
            const newActivities = [...activities, task];
            setActivities(newActivities);
            completeBtn.setAttribute('disabled', '');
            completeBtn.innerText = "Completed";
        }
    }

    const clearActivities = () => {
        const allCompleteBtns = [...document.getElementsByClassName("completeBtns")];
        console.log(allCompleteBtns)
        if (activities.length>0) {
            setActivities([]);
            allCompleteBtns.forEach(btn => {
                btn.disabled = false;
                btn.innerHTML = "Complete"
            });
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