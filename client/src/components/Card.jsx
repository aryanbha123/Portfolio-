import React, { useState } from 'react'
import Modal from 'react-modal'
import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'

Modal.setAppElement('#root') // This is important for accessibility

export default function Card({ project }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const BASE_URL = process.env.REACT_APP_API
    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <div style={{}}>
            <div class="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href={`${BASE_URL}/projects/${project._id}`}>
                    <img class="w-full h-60 object-contain" src={project.thumbnail} alt="Project 1" />
                        <div
                            class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-100 to-pink-100 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                        </div>
                        <div class="p-4 flex flex-col items-center justify-between relative z-10">
                            <h3 class="text-lg font-medium text-txt group-hover:text-gray-dark">{project.name}</h3>
                            <span class="text-sm font-bold text-pink-500 group-hover:text-indigo-500">{project.technology}</span>
                        </div>
                </a>
            </div>

        </div>
    )
}
