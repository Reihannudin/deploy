import React, { useRef, useEffect } from 'react';

const CustomAlert = ({ message, onClose }) => {
    const alertContentRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the alert content when it renders
        if (alertContentRef.current) {
            alertContentRef.current.scrollTop = alertContentRef.current.scrollHeight;
        }
    }, []);

    return (

        <div className="fixed inset-0 flex items-center justify-center " onClick={onClose} style={{ zIndex: "40000" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 bg-white dark:bg-gray-800 border-radius-8 p-4 shadow-lg max-w-screen-sm md:w-7/12 w-10/12 lg:w-5/12">
                <div
                    className="text-purple-700 mt-6 mb-8 scrollbar-hide w-full relative font16-res-400 text-lg"
                    ref={alertContentRef}
                    style={{ maxHeight: '80vh', overflowY: 'auto' }}
                >
                    {message}
                </div>
                <button
                    onClick={onClose}
                    className="block  mt-6 mb-3  mx-auto font15-res-300 w-20 bg-purple-700  py-2  border-radius-4 text-white dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-800 dark:hover:text-white rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
