import React from 'react';

export default function Modal({ children, showModal, setShowModal }) {

    let modalClasses = "z-50 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center backdrop-brightness-50 backdrop-blur-md transition-opacity"
    if (showModal === false) {
        modalClasses += " hidden opacity-0";
    } else {
        modalClasses += " opacity-1";
    }

    function closeModal() {
        setShowModal(!showModal);
    }

    return (
        <div className={modalClasses}>
            <button
                onClick={closeModal}
                className='bg-aulaBlack text-white p-2 mb-4 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className='w-[280px] md:w-[800px] max-h-[600px] overflow-auto flex flex-col p-4 bg-white dark:bg-gray-800 rounded-md border border-1 border-gray-100 dark:border-gray-900'>
                {children}
            </div>
        </div>
    )
}