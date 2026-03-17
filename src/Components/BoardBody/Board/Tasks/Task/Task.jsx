import React from 'react';

const Task = () => {
    return (
        <div className='bg-primary/5 p-3 rounded-xl space-y-3 shadow-sm'>
            <div className="badge rounded-full">Shop Ease</div>
            <h3 className='text-xl font-semibold text-base-content/90'>Fix Mobile Button Issue</h3>
            <p className='bg-base-100 p-2 rounded-md text-base-content/60 leading-6'>
                A Card Component has a figure, a body par, and inside body there are title and action parts
            </p>
            <div className='flex justify-between pt-2'>
                <div>
                    <p className="text-base-content/60 text-sm">Deadline</p>
                    <p className='text-sm'>21 March 2025</p>
                </div>
                <button className='btn btn-primary'>Complete</button>
            </div>
        </div>
    );
};

export default Task;