import React from 'react';

const Task = ({task, completeBtnHandler}) => {
    return (
        <div className='bg-primary/5 p-3 rounded-xl space-y-3 shadow-sm'>
            <div className="badge rounded-full">{task.company}</div>
            <h3 className='text-xl font-semibold text-base-content/90'>{task.title}</h3>
            <p className='bg-base-100 p-2 rounded-md text-base-content/60 leading-6'>
                {task.description}
            </p>
            <div className='flex justify-between pt-2'>
                <div>
                    <p className="text-base-content/60 text-sm">Deadline</p>
                    <p className='text-sm'>{task.deadline}</p>
                </div>
                <button className='btn btn-primary' onClick={()=>{completeBtnHandler(task)}}>Complete</button>
            </div>
        </div>
    );
};

export default Task;