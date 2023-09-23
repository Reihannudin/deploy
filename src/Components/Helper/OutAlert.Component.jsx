import React, {useEffect, useRef} from "react";

export  const OutAlertComponent = ({ type ,  name , message , onClose , onSubmit}) => {
    const alertContentRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the alert content when it renders
        if (alertContentRef.current) {
            alertContentRef.current.scrollTop = alertContentRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center " onClick={onClose} style={{ zIndex: "400" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:pt-6 pt-4 pb-4 lg:px-5 bg-white dark:bg-gray-800 border-radius-8 p-4 shadow-lg max-w-screen-sm md:w-7/12 w-10/12 lg:w-5/12">
                <h3 className="text-purple-700 lg:mb-1 mt-2 font18-res-300">{type}</h3>
                <div
                    className="text-gray-700 mt-1 mb-5 lg:mb-3 scrollbar-hide w-full relative font15-res-300"
                    ref={alertContentRef}
                    style={{ maxHeight: '80vh', overflowY: 'auto' }}
                >
                    <p className="font15-res-300 text-gray-600"> {message} : {name} ?</p>
                </div>
                <div className="flex mt-3 mb-1 lg:pt-6 mx-auto font14-res-300 justify-between">
                    <button
                        onClick={onClose}
                        className="block mt-2 px-3 me-auto w-5/12  bg-purple-500 py-2 text-white   hover:bg-purple-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white rounded-md"
                    >
                        Kembali
                    </button>
                    <button
                        onClick={onSubmit}
                        className="block mt-2  border border-gray-200  w-5/12 ms-auto px-3 py-2 text-purple-700 bg-white dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-800 dark:hover:text-white rounded-md"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}