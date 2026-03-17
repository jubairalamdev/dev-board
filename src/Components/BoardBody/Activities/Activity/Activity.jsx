import React from 'react';

const Activity = ({activity}) => {
    return (
        <div className='bg-base-300/60 p-3 rounded-xl'>
            <h3 className='text-xl font-semibold text-base-content/90'>{activity.title}</h3>
            <div className="badge rounded-full -ml-2">{activity.company}</div>
        </div>
    );
};

export default Activity;