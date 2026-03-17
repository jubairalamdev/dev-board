import React from 'react';
import { RotateCcw } from 'lucide-react'
import Activity from './Activity/Activity';

const Activities = ({activities, clearActivities}) => {

    return (
        <div className='col-span-1 bg-base-100 rounded-2xl px-3 py-5'>
            <div className='flex items-center flex-col gap-3'>
                <h2 className='text-xl font-medium flex gap-2'>
                    <RotateCcw />
                    Activity Log
                </h2>
                <button className="btn btn-primary" onClick={()=>{clearActivities()}}>Clear History</button>
            </div>
            <hr className='text-base-content/10 border-2 mt-3 border-dashed' />
            <div className='py-3 flex flex-col gap-3'>
                {
                    activities.map(activity => <Activity activity={activity} key={activity.id}></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;