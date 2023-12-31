import React, {useEffect, useRef} from "react";

export  const DeleteAlertComponent = ({ type ,  name , onClose , onSubmit}) => {
    const alertContentRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the alert content when it renders
        if (alertContentRef.current) {
            alertContentRef.current.scrollTop = alertContentRef.current.scrollHeight;
        }
    }, []);

    return (

        <div className="fixed inset-0 flex  mx-auto sm:w-9/12 md:w-9/12  lg:w-10/12  items-center justify-center " onClick={onClose} style={{ zIndex: "400" }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:pt-3 pt-4 pb-4 lg:px-5 bg-white dark:bg-gray-800 border-radius-8 p-4 shadow-lg max-w-screen-sm md:w-7/12 w-10/12 lg:w-5/12">
                <h3 className="text-purple-700 pb-2 border-b lg:mb-1 mt-2 font16-res-400">Menghapus {type} anda?</h3>
                <div
                    className="text-gray-700 mt-1 lg:mb-3 scrollbar-hide w-full relative font15-res-300"
                    ref={alertContentRef}
                    style={{  overflowY: 'auto' }}
                >
                    <p className=" font15-input-res-300 mb-6 md:mb-4">Apakah anda yakin akan ingin menghapus {type} : {name}?</p>
                </div>
                <div className="flex mt-1 sm:mt-3 mb-1 lg:pt-6 mx-auto font14-label-res-300 justify-between">
                    <button
                        onClick={onClose}
                        className="block mt-2 px-3 me-auto w-4/12  bg-purple-500 py-2 text-white   hover:bg-purple-700 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white border-radius-4"
                    >
                        Kembali
                    </button>
                    <button
                        onClick={onSubmit}
                        className="block mt-2  border border-gray-200  w-4/12 ms-auto px-3 py-2 text-purple-700 bg-white dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-800 dark:hover:text-white border-radius-4"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}