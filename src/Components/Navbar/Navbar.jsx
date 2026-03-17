import logoPng from '../../../public/assets/logo.png';
import themeBtn from '../../../public/assets/theme-btn.png';
import React from 'react';
import { Check } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm rounded-2xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img src={logoPng} alt="Logo" className='w-7' />
                    <h2 className='text-base-content/90 font-medium text-2xl'>Dev<span className='font-bold'>Board</span></h2>
                </a>
            </div>
            <div className="flex gap-4">
                <div className="bg-base-300/80 rounded-3xl py-2 px-3 flex items-center gap-2">
                    <div className='bg-primary/80 text-base-100 rounded-xl px-1 py-0.5'>
                        <Check />
                    </div>
                    <span className='text-xl font-semibold'>0</span>
                </div>
                <label className="swap swap-rotate py-1 px-2 bg-base-300/80 rounded-full">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <img src={themeBtn} alt="" srcset="" className='w-7'/>

                    {/* moon icon */}
                    <img src={themeBtn} alt="" srcset="" className='w-7'/>
                </label>
            </div>
        </div>
    );
};

export default Navbar;