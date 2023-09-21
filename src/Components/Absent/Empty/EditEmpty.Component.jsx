import React, {useEffect, useState} from "react";


export const EditEmptyComponent = (props) => {


    return (
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="flex items-center justify-center h-96 md:mt-6 mt-20">

                    <div
                        className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>

                </div>
            </div>
        </>
    );
};

