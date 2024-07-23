import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Sidenav.css';
import { Divider, IconButton, Tooltip, Typography } from '@mui/material';
import yoni from '../../Assests/yoni.png';
import bg1 from './images/intro3.png';
import bg2 from './images/intro2.png';
import { Download } from '@mui/icons-material';
import html2pdf from 'html2pdf.js';
import file from './icons/file.png'

// week 1 import 
import Caursel1 from './images/week1-1.jpg';
import Caursel2 from './images/week1-2.png';
import Caursel3 from './images/week1-3.png';
import draft from './data/aryan-bhandari-draft.docx';
// import Caursel3 from './images/caursel.jpg';
import Carousel from './Slider';
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

    const handleDownload = () => {
        const element = document.getElementById('main-content');
        html2pdf().from(element).save('portfolio.pdf');
    };

    return (
        <div className="flex relative ">
            <aside style={{ top: "92px" }} className='bg-white fixed left-0 lg:translate-x-0 pr-3  -translate-x-full px-5 py-5  w-[230px] h-[calc(100vh-93px)]'>
                <p className='font-medium text-xl'>Yoni <small>Bleed With Pride</small></p>
                <ul className='aside-list  list-none flex flex-col overflow-y-scroll' style={{ height: "100%" }}>
                    <Link to='introduction' spy={true} smooth={true} duration={500} className='cursor-pointer'>
                        Introduction
                    </Link>
                    {weeks.map((week) => (
                        <Link key={week} to={`item-${week}`} spy={true} smooth={true} duration={500} className='cursor-pointer '>
                            Week {week}
                        </Link>
                    ))}
                </ul>
            </aside>
            <span className='badge absolute top-2 z-50 right-5' onClick={handleDownload}>
                <Tooltip title="Download Portfolio">
                    <Download className='cursor-pointer' />
                </Tooltip>
            </span>
            <Divider className='lg:flex hidden' sx={{ position: "fixed", height: "calc(100vh-93px)", top: "93px", left: "230px" }} orientation='vertical' />
            <div className="lg:w-60"></div>
            <div className='px-5 py-5 lg:pr-10 flex-1 flex flex-col gap-7 main-content' style={{ flex: 1, width: "", height: "max-content" }} id="main-content">
                <Element name="introduction" className="-5">
                    <div className="relative">

                        <div className="">
                            <p className='lg:border-l-4 border-l-4 lg:pb-0 pb-3  text-2xl font-bold pl-3 border-black'>
                                Introduction
                            </p>
                        </div>
                        <div className="flex  items-center flex-col-reverse lg:flex-row gap-5 mt-3">
                            <img src={yoni} className='lg:w-44 w-0 ' alt="" />
                            <p>
                                Embarking on a social internship with Yoni Bleed with Pride has been a transformative journey,
                                reshaping my perspectives and deepening my understanding of menstrual equity. Before joining this
                                NGO, my knowledge about menstrua on was limited, influenced by societal s gmas and
                                misconcep ons. However, this internship has enlightened me, eradica ng any preconceived no ons
                                of impurity associated with menstrua on.
                            </p>
                        </div>
                        <div className=" items-start flex flex-col  mt-8 gap-5  lg:flex-row md:flex-row" style={{ width: "100%" }}>
                            <img src={bg1} className='lg:w-[560px] w-full rounded-lg' alt="" />
                            <div className="flex flex-col gap-4">
                                <p className='text-red-600  text-2xl font-semibold  border-black'>
                                    Glimpse of Internship
                                </p>
                                <p>Under the guidance of Secretary Manik Mehra and the visionary leadership of Founder Ritika Panwar, I have witnessed firsthand the impact of Yoni Bleed with Pride's initiatives. Their dedication and passion for menstrual equity have inspired the entire team to strive for meaningful change. Through various workshops, awareness campaigns, and community outreach programs, we have been able to challenge societal norms and promote a more inclusive and informed dialogue around menstruation.
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>
                <Divider className='my-5' />
                <Element name='item-1' className='' >
                    <div className="flex flex-col gap-3">
                        <p className='lg:border-l-4 border-l-4 lg:pb-0 pb-3  text-xl font-semibold pl-3 border-black'>
                            week 1
                        </p>
                        <div className="mt-4">
                            <Carousel img1={Caursel1} img2={Caursel2} img3={Caursel3} />
                            <div className="flex flex-col mt-4 gap-2">
                                <strong>Plantation Drive</strong>
                                <p className='lg:h-auto h-48 lg:overflow-hidden overflow-y-scroll'> Partcipating in a plantation drive was a unique experience that intertwined
                                    environmental sustainability with menstrual equity. The drive symbolized growth and renewal,
                                    mirroring the ongoing efforts to foster a more inclusive and educated society regarding menstrual
                                    health. We planted trees and plants that symbolized life and growth, reminding us of the natural
                                    cycles and the importance of nurturing both our environment and our communi es. Working
                                    alongside volunteers who shared a passion for both environmental and social causes was inspiring
                                    and mo va ng. This ac vity emphasized the interconnectedness of various social issues, showing
                                    that caring for the environment and promo ng menstrual health can go hand in hand. </p>
                                <strong>
                                    Word File on Menstruation
                                </strong>
                                <div className="flex gap-4 items-center">

                                    <img height={"45px"} width={"45px"} src={file} alt="" />
                                    <a href={draft}>Download</a>
                                </div>

                            </div>


                        </div>
                    </div>
                </Element>
                {/* {weeks.map((week) => (
                    <Element name={`item-${week}`} className="" key={week}>
                        <h2>Week {week}</h2>
                        <p>Content for week {week}...</p>
                    </Element>
                ))} */}
            </div>
        </div>
    );
}