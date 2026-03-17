import React from 'react';
import BoardBanner from './BoardBanner/BoardBanner';
import Tasks from './Tasks/Tasks';

const Board = () => {
    return (
        <div className='bg-base-100 py-5 px-3 rounded-3xl col-span-3'>
            <BoardBanner></BoardBanner>
            <hr className='text-base-content/10 border-2 my-3 border-dashed' />
            <Tasks></Tasks>
        </div>
    );
};

export default Board;