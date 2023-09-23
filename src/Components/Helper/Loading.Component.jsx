
import React from 'react';

const Loading = () => {
    return (
        <div className="flex  items-center justify-center h-screen">

                <div
                    className="animate-spin rounded-full border-r-gray-50 border-l-gray-50  border-b-gray-50  w-8 h-8 md:h-10 md:w-10 border-t-4 border-purple-700"></div>
        </div>
    );
};

export default Loading;