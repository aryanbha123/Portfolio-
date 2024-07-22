import React, { useEffect, useState } from 'react';
import google from '../icons/google.svg';
import { useAuth } from '../AuthContext';
import { signInWithGoogle } from '../firebase';

export default function Service() {
    const { user } = useAuth();
    const [showPopUp, setHidePopUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidePopUp(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <section>
                <div className="px-4 py-24 mx-auto md:px-12 lg:px-4 max-w-screen-xl flex flex-col justify-center">
                    <div className="flex flex-col justify-start w-full">
                        <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
                            <div>
                                <h1>Welcome to My Portfolio</h1>
                                <p className="text-balance">
                                    Explore my projects, skills, and professional journey.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 border-t pt-12">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24  justify-start">
                                <div>
                                    <span className="text-gray-600 uppercase text-xs font-medium">
                                        Skills & Expertise
                                    </span>
                                    <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                                        Full-Stack Development, UX/UI Design, and More
                                    </p>
                                    <p className="text-sm mt-4 text-gray-700 text-balance">
                                        Proficient in modern web technologies and tools, with a passion for creating impactful digital experiences.
                                    </p>
                                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-code" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 12l-2 -2l-2 2"></path>
                                                <path d="M15 12l2 -2l2 2"></path>
                                                <path d="M6 6l-3 3l3 3"></path>
                                                <path d="M18 18l3 -3l-3 -3"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">MERN Stack</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-device-desktop" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 4h16v12H4z"></path>
                                                <path d="M8 20h8"></path>
                                                <path d="M12 16v4"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Responsive Design</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-brain" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8 3c.132 .016 .265 .03 .4 .05c2.35 .39 5.6 1.01 8.6 3.95c.746 .746 1.4 1.61 1.9 2.54c.797 1.42 1.268 2.948 1.2 4.46c-.104 2.45 -.944 4.31 -2.55 5.6c-.473 .37 -1.034 .65 -1.66 .84c-.812 .24 -1.732 .29 -2.54 .11c-1.178 -.24 -2.24 -.81 -3.12 -1.63c-2.31 -2.11 -3.58 -4.37 -3.97 -7.17c-.21 -1.5 .04 -3.05 .79 -4.4c.66 -1.18 1.49 -2.11 2.57 -2.92c1.2 -.91 2.41 -1.58 3.43 -1.85"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Problem Solving</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-palette" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 21a9 9 0 1 0 -9 -9a9 9 0 0 0 9 9z"></path>
                                                <path d="M12 7h.01"></path>
                                                <path d="M15 12h.01"></path>
                                                <path d="M9 12h.01"></path>
                                                <path d="M12 15h.01"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Creative Design</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full md:order-first">
                                    <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=ais_user" alt="Project Showcase" className=" shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-contain object-center" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 md:flex-row-reverse">
                                <div>
                                    <span className="text-gray-600 uppercase text-xs font-medium">
                                        Project Highlights
                                    </span>
                                    <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                                        Showcasing the Best of My Work
                                    </p>
                                    <p className="text-sm mt-4 text-gray-700 text-balance">
                                        Dive into detailed case studies, client testimonials, and the innovative solutions I've delivered.
                                    </p>
                                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database text-gray-700 size-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path>
                                                <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                                                <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Database Design</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ux-circle text-gray-700 size-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 3a9 9 0 1 0 9 9"></path>
                                                <path d="M12 6v3h5"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">User Experience (UX)</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bootstrap text-gray-700 size-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M18 3h-12a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3 -3v-12a3 3 0 0 0 -3 -3z"></path>
                                                <path d="M9 16v-8h3.5a2.5 2.5 0 0 1 0 5h-3.5"></path>
                                                <path d="M10.5 11h2"></path>
                                                <path d="M12.5 11a2.5 2.5 0 0 1 0 5h-3.5v-5"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Front-End Frameworks</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-coding text-gray-700 size-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 18a4 4 0 1 0 -4 -4"></path>
                                                <path d="M5 18v-1"></path>
                                                <path d="M3 14a4 4 0 1 0 4 -4"></path>
                                                <path d="M3 14h1"></path>
                                                <path d="M11 14h7"></path>
                                                <path d="M11 12h5"></path>
                                                <path d="M14 9v2"></path>
                                                <path d="M14 16v2"></path>
                                                <path d="M14 16h-5a3 3 0 1 0 0 -6h5"></path>
                                            </svg>
                                            <span className="text-gray-950 font-medium text-sm">Cloud Integration</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full">
                                    <img src="https://blog.educationnest.com/wp-content/uploads/2023/10/Untitled-design-2023-10-27T144159.540-1024x853.jpg" alt="Project Showcase" className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showPopUp && !user && (
                <div className="fixed inset-x-0 bottom-0 flex justify-center z-50">
                    <div className="flex items-center gap-4 p-4 shadow-lg rounded bg-gray-100 border border-gray-300 max-w-sm mx-auto mb-8">
                        <div>
                            <img className="w-8" src={google} alt="Google" />
                        </div>
                        <div>
                            <h5 className="text-gray-900 text-sm font-medium">Sign In with Google</h5>
                            <p className="mt-1 text-xs text-gray-600">Get personalized content and stay updated.</p>
                        </div>
                        <button onClick={signInWithGoogle} className="ml-4 py-2 px-4 bg-blue-600 text-nowrap text-white rounded text-sm">Sign In</button>
                    </div>
                </div>
            )}
        </div>
    );
}