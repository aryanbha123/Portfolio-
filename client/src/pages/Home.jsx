import React from 'react';
import aryan from '../Assests/image.png'
import './Home.css';

export default function Home() {
  return (
    <div>
      <section className="overflow-hidden bg-transparent dark:bg-gray-800 md:pt-0 lg:px-4">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{height:"80vh" , marginTop:"28px"}}>
            <div className='mt-32'>
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />Aryan Bhandari
              </h2>
              <p className="max-w-lg text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                I'm a passionate web developer specializing in modern web technologies and frameworks. I create efficient and scalable web applications that deliver seamless user experiences.
              </p>

              <p className="text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                <span className=" inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2-300 dark:bg-gray-900"></span>
                  <span className=" mr-4"> Have a question? </span>
                </span>
                <br className="block sm:hidden mx-3" />Ask me on <a href="https://web.whatsapp.com/send/?phone=7017244279&text&type=phone_number&app_absent=0" title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Whatsapp</a>
              </p>
            </div>

            <div className="relative">
              <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" style={{zIndex:"-3"}} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
