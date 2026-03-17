import React, { Suspense } from 'react';
import BoardBanner from './BoardBanner/BoardBanner';
import Tasks from './Tasks/Tasks';
import axios from 'axios';
import TasksSkeleton from './TasksSkeleton/TasksSkeleton';

const taskData = axios.get("../../../database/problems.json");

const Board = ({completeBtnHandler, activities}) => {
    return (
        <div className='bg-base-100 py-5 px-3 rounded-3xl col-span-3'>
            <BoardBanner activities={activities}></BoardBanner>
            <hr className='text-base-content/10 border-2 my-3 border-dashed' />
            <Suspense fallback={<TasksSkeleton></TasksSkeleton>}>
                <Tasks taskData={taskData} completeBtnHandler={completeBtnHandler}></Tasks>
            </Suspense>
        </div>
    );
};

export default Board;