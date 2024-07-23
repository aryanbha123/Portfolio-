import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Sidenav.css';
import { Divider, Tooltip } from '@mui/material';
import yoni from '../../Assests/yoni.png'
import bg1 from './images/intro3.png'
import bg2 from './images/intro2.png'
import { Download } from '@mui/icons-material';
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



            <div className='px-5 py-5 lg:pr-10 flex-1 lg:ml-60' style={{ flex: 1, width: "300px", height: "max-content" }}>
                <Element name="introduction" className="-5">
                    <div className="relative">
                        <span className='badge fixed top-28 right-5'>
                            <Tooltip title="Download Portfolio">
                                <Download className='cursor-pointer' />
                            </Tooltip>
                        </span>
                        <div className="">

                            <p className='lg:border-l-8 border-l-4  text-2xl font-medium pl-3 border-black'>
                                Introduction
                            </p>
                        </div>
                        <div className="flex items-center flex-col-reverse lg:flex-row gap-5 mt-1">
                            <img src={yoni} className='lg:w-44 w-0 ' alt="" />
                            <p>
                                Embarking on a social internship with Yoni Bleed with Pride has been a transforma ve journey,
                                reshaping my perspec ves and deepening my understanding of menstrual equity. Before joining this
                                NGO, my knowledge about menstrua on was limited, influenced by societal s gmas and
                                misconcep ons. However, this internship has enlightened me, eradica ng any preconceived no ons
                                of impurity associated with menstrua on.
                            </p>
                        </div>
                        <div className=" items-start flex flex-col  mt-8 gap-5  lg:flex-row md:flex-row" style={{ width: "100%" }}>
                            <img src={bg1} className='lg:w-[560px]  rounded-lg' alt="" />
                            {/* <img src={bg2} className='lg:w-[calc(100vw-650px-230px-30px)]  mt-8 rounded-lg' alt="" /> */}
                            <div className="flex flex-col gap-4 py-4">
                                <p className='text-red-600  text-2xl font-medium  border-black'>
                                   Glimpse of Internship
                                </p>
                                <p>Under the guidance of Secretary Manik Mehra and the visionary leadership of Founder Ritika Panwar, I have witnessed firsthand the impact of Yoni Bleed with Pride's initiatives. Their dedication and passion for menstrual equity have inspired the entire team to strive for meaningful change. Through various workshops, awareness campaigns, and community outreach programs, we have been able to challenge societal norms and promote a more inclusive and informed dialogue around menstruation.
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>
                {weeks.map((week) => (
                    <Element name={`item-${week}`} className="my-96" key={week}>
                        <h2>Week {week}</h2>
                        <p>Content for week {week}...</p>
                    </Element>
                ))}
            </div>
        </div>
    );
}