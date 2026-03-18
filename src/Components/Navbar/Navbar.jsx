import logoPng from '../../../public/assets/logo.png';
import themeBtn from '../../../public/assets/theme-btn.png';
import React, { use } from 'react';
import { Check } from 'lucide-react';
import axios from 'axios';

const taskDataPromise = axios.get("https://gist.githubusercontent.com/jubairalamdev/199273327a99c2336beca55c0ad87ae4/raw/063e65b8afb2419273f74f0496a5fbdb58f4407f/gistfile1.txt");

const Navbar = () => {
    const taskData = use(taskDataPromise).data;
    return (
        <div className="navbar bg-base-100 shadow-sm rounded-2xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'>
                    <img src={logoPng} alt="Logo" className='w-7' />
                    <h2 className='text-base-content/90 font-medium text-2xl'>Dev<span className='font-bold'>Board</span></h2>
                </a>
            </div>
            <div className="flex gap-4">
                <div className="bg-base-300/80 rounded-3xl py-2 px-3 flex items-center gap-2">
                    <div className='bg-primary/80 text-base-100 rounded-xl px-1 py-0.5'>
                        <Check />
                    </div>
                    <span className='text-xl font-semibold'>{taskData.length}</span>
                </div>
                <label className="swap swap-rotate py-1 px-2 bg-base-300/80 rounded-full">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <img src={themeBtn} alt="" className='w-7'/>

                    {/* moon icon */}
                    <img src={themeBtn} alt="" className='w-7'/>
                </label>
            </div>
        </div>
    );
};

export default Navbar;