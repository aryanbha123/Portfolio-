import React from 'react'
import {Link} from 'react-scroll'
import './Sidenav.css'
export default function Sidenav() {


    const weeks = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
    return (
        <aside style={{ top: "92px" }} className='px-5 py-5 fixed w-[230px] h-[calc(100vh-93px)] bg-slate-50 overflow-y-scrol right-0'>

            <ul className='aside-list list-none flex flex-col '>
                {
                    weeks.map((i) => (
                        <>
                            <Link to={`item-3 `} className={`${i} cursor-pointer`}>Week {i}</Link>
                        </>
                    ))
                }
            </ul>
        </aside>
    )
}
