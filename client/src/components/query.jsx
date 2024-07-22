import React from 'react'

export default function Portfolio() {
    return (
        <div>
            <div className="relative overflow-hidden border-b  w-full dark:border-gray-700 dark:bg-gray-900">
                <div className="px-6 lg:py-36 py-36 sm:px-6 sm:py-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
                            I’ve Made Some Exciting Projects
                        </h2>
                        <p className="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug dark:text-gray-300">
                            I'm a skilled MERN stack developer with experience in building dynamic and responsive web applications. Check out my projects to see my work in action.
                        </p>
                        <div className="flex items-center justify-center mt-6 sm:mt-10">
                            <a className="flex flex-row items-center justify-center min-w-[130px] rounded-full border transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] hover:text-gray-200 dark:bg-white dark:text-black dark:hover:text-gray-700 px-8"
                                href="https://aryanbhandari.online/projects" target="_blank" rel="noopener noreferrer">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1024 1024" style={{zIndex:"-1"}}
                    className="absolute left-1/2  top-1/2  h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                            <stop stop-color="#3b82f6"></stop>
                            <stop offset="1" stop-color="#1d4ed8"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}