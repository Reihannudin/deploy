import React, {useEffect, useState} from "react";


export const EditEmptyComponent = (props) => {


    return (
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="flex items-center justify-center h-96 md:mt-6 mt-20">
                    <div className="animate-spin">
                        <img src="/assets/planet_gif-1.gif" className="h-20 w-20" alt="Loading" />
                    </div>
                </div>
            </div>
        </>
    );
};

