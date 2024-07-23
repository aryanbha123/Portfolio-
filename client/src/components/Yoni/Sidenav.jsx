import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Sidenav.css';
import { Divider } from '@mui/material';
import yoni from '../../Assests/yoni.png'
import bg1 from './images/intro1.jpg'
export default function Sidenav() {
    const weeks = Array.from({ length: 7 }, (_, i) => `${i + 1}`);

    React.useEffect(() => {
        scrollSpy.update();
        Events.scrollEvent.register('end', () => {
            scrollSpy.update();
        });
        return () => {
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className="flex relative ">
            <aside style={{ top: "92px" }} className='bg-white fixed left-0 lg:translate-x-0 pr-3  -translate-x-full px-5 py-5  w-[230px] h-[calc(100vh-93px)]'>
                <p className='font-medium text-xl'>Yoni <small>Bleed With Pride</small></p>
                <ul className='aside-list  list-none flex flex-col overflow-y-scroll' style={{ height: "100%" }}>

                    <Link to='introduction' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                        Introduction
                    </Link>

                    {weeks.map((week) => (
                        <Link to={`item-${week}`} spy={true} smooth={true} duration={500} className='cursor-pointer '>
                            Week {week}
                        </Link>
                    ))}
                </ul>
            </aside>
            <Divider className='lg:flex hidden' sx={{ position: "fixed", height: "calc(100vh-93px)", top: "93px", left: "230px" }} orientation='vertical' />
            <main className='px-5 py-5 lg:pr-10 flex-1 lg:ml-60' style={{ flex: 1 }}>
                <Element name="introduction" className="my-5">
                    <div className="">
                        <p className='lg:border-l-8 border-l-4  text-2xl font-medium pl-3 border-black'>Introduction</p>
                        <div className="flex items-center flex-col-reverse lg:flex-row gap-5 mt-5">
                            <img src={yoni} className='lg:w-44  w-96' alt="" />
                            <p> 
                                Embarking on a social internship with Yoni Bleed with Pride has been a transforma ve journey,
                                reshaping my perspec ves and deepening my understanding of menstrual equity. Before joining this
                                NGO, my knowledge about menstrua on was limited, influenced by societal s gmas and
                                misconcep ons. However, this internship has enlightened me, eradica ng any preconceived no ons
                                of impurity associated with menstrua on.
                            </p>
                        </div>
                        <div className="">
                            <img src={bg1} alt="" />
                        </div>
                    </div>
                </Element>
                {weeks.map((week) => (
                    <Element name={`item-${week}`} className="my-96" key={week}>
                        <h2>Week {week}</h2>
                        <p>Content for week {week}...</p>
                    </Element>
                ))}
            </main>
        </div>
    );
}