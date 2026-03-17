import React from 'react';
import Task from './Task/Task';

const Tasks = () => {
    return (
        <div className='rounded-2xl grid grid-cols-3 gap-3'>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            <Task></Task>
        </div>
    );
};

export default Tasks;