import React from 'react';
import Board from './Board/Board';
import Activities from './Activities/Activities';

const BoardBody = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            <Board></Board>
            <Activities></Activities>
        </div>
    );
};

export default BoardBody;