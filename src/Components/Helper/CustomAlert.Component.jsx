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

        <div className="fixed inset-0 flex items-center justify-center " style={{ zIndex: "400" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-md p-4 shadow-lg max-w-screen-sm w-11/12">
                <div
                    className="text-purple-700 relative font15-res-300 text-lg"
                    ref={alertContentRef}
                    style={{ maxHeight: '80vh', overflowY: 'auto' }}
                >
                    {message}
                </div>
                <button
                    onClick={onClose}
                    className="block mt-2 px-4 py-2 text-purple-700 bg-white dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-800 dark:hover:text-white rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
