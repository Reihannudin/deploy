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

        <div className="fixed inset-0 pb-2  md:w-10/12 mx-auto w-full flex items-center justify-center " onClick={onClose} style={{ zIndex: "40000" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 bg-white dark:bg-gray-800 border-radius-8 p-4 shadow-lg max-w-screen-sm md:w-7/12 w-10/12 lg:w-5/12">
                <div className="relative ">
                    <p className="font15-input-res-300 pt-3 pb-1 border-b text-purple-700 ">Copied Url</p>
                    <div
                        className="text-purple-700 mt-1 mb-4 md:mt-4 md:mb-9  scrollbar-hide w-full relative font15-input-res-300 text-lg"
                        ref={alertContentRef}
                        style={{  overflowY: 'auto' }}
                    >
                        {message}
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="block  mt-3 mb-2  me-auto font14-label-res-300 px-4 md:px-6 bg-purple-600  py-2-c  border-radius-4 text-white dark:bg-gray-600 hover:bg-purple-700 hover:text-white dark:hover:text-white rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
