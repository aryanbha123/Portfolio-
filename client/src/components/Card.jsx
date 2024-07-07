import React, { useState } from 'react'
import Modal from 'react-modal'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

Modal.setAppElement('#root') // This is important for accessibility

export default function Card({ project }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div
                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src={`${project.images[0]}`}
                        alt="card-image"
                        className="cursor-pointer"
                        onClick={openModal}
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UI/UX Review Check
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={openModal}>
                        View Full Size
                    </button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal} // Allows closing the modal by clicking outside or pressing Esc
                contentLabel="Image Preview"
                style={{
                    overlay: { zIndex: 1000 },
                    content: { zIndex: 1001 }
                }}
                className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="relative bg-white p-4 rounded-lg shadow-lg max-h-full lg:max-h-3/4">
                    <button
                        style={{zIndex:"999"}}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={closeModal}>
                        Close
                    </button>
                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows dynamicHeight>
                        {project.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className="max-w-full max-h- lg:max-h-[calc(100vh-4rem)]" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Modal>
        </div>
    )
}
