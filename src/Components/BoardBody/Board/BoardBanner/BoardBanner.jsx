import './BoardBanner.css'
import { Check, CalendarDays } from 'lucide-react';
import notePng from '../../../../../public/assets/board.png';

const now = new Date();

const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
}).replace(/,/g, '');

const BoardBanner = ({activities}) => {
    
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className='bg-base-300/60 p-2 rounded-2xl flex gap-3 items-center'>
                <div className="bg-base-100 rounded-3xl py-2 px-3 flex items-center gap-2 w-fit h-fit">
                    <div className='bg-primary/80 text-base-100 rounded-xl px-1 py-0.5'>
                        <Check />
                    </div>
                </div>
                <div>
                    <p className="text-base-content/70">Task Completed</p>
                    <span className='text-lg font-semibold'>{activities.length}</span>
                </div>
            </div>
            <div className='bg-gradient p-3 col-span-2 rounded-2xl flex items-center gap-3'>
                <img src={notePng} alt=""/>
                <h2 className='text-base-100 font-semibold text-xl'>Discover  Something New Today</h2>
            </div>
            <div className='bg-base-300/60 p-2 rounded-2xl flex gap-3 items-center'>
                <CalendarDays />
                <p>{formattedDate}</p>
            </div>
        </div>
    );
};

export default BoardBanner;