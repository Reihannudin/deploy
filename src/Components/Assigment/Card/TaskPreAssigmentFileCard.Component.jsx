import React, {useRef, useState} from "react";

export const TaskPreAssigmentFileCardComponent = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log("Selected file:", file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
    <>
        <div className="shadow my-6 bg-white border-radius-8 unselectable py-3.5 px-3" style={{ borderBottom:"6px solid #8D2EF4"}}>
            <div className="mx-2">
                <div className="justify-between my-3 flex">
                    <div className="w-6/12 flex gap-2 text-left">
                        <div className="my-auto" style={{ width:"20px" , height:"20px"}}>
                            <img className="w-full h-full" src="/assets/assigment-sm-icon.svg" />
                        </div>
                        <p  className="font14-res-300 my-auto" style={{ color:"#5d5d5d"  , fontWeight:"550"}}>
                            File
                        </p>
                    </div>
                    <div className="w-2/12">
                        <div className="border border-gray-300 border-radius-4 px-0">
                            <p  className="font14-res-300" style={{ color:"#5d5d5d" , fontWeight:"550"}}>1 pt</p>
                        </div>
                    </div>
                </div>
                <div className=" flex text-gray-700" >
                    <div className="w-11/12">
                        <div className="text-left">
                            <h2 className="font16-res-400">Setiap tanggal 10 Muharram setiap muslim disunnahkan melaksanakan?</h2>
                        </div>
                    </div>
                    <div className="w-1/12">
                        <div className="text-red-600">
                            <p style={{ fontSize:"20px"}}>*</p>
                        </div>
                    </div>
                </div>
                <div>
                        <input
                            required
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileInputChange}
                        />
                        <button className="mt-8 mb-2" onClick={handleButtonClick}>
                            <div className="mx-auto" style={{ height:"30px"}}>
                                <img className="mx-auto h-full" src="/assets/upload_file.svg" />
                            </div>
                            <p className="mx-auto mt-2 mb-4 font16-res-300">Upload File</p>
                            </button>
                        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                </div>
            </div>
        </div>
    </>
    );
}