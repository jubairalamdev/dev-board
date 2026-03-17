import React, { use } from 'react';
import Task from './Task/Task';

const Tasks = ({taskData, completeBtnHandler}) => {



    const tasksRes = use(taskData);
    const tasksData = tasksRes.data;

    return (
        <div className='rounded-2xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
            {
                tasksData.map(task => <Task task={task} key={task.id} completeBtnHandler={completeBtnHandler}></Task>)
            }
        </div>
    );
};

export default Tasks;