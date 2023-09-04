import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
import axios from "axios";

export const MakeMyTaskAssigmentLinkCardComponent = (props) => {
    const [text, setText] = useState("");
    useEffect(() => {
        setText(props.question);
    }, [props.question]);
    const handleTextChange = (value) => {
        setText(value);
    };

    const [point, setPoint] = useState(1);
    useEffect(() => {
        setPoint(props.point);
    }, [props.point]);
    const handlePointChange = (event) => {
        const value = parseInt(event.target.value);
        setPoint(value);
    };

    const [isRequired, setIsRequired] = useState(0);
    useEffect(() => {
        setIsRequired(props.required);
    }, [props.required]);
    const clickRequired = () => {
        setIsRequired(isRequired === 0 ? 1 : 0);
    };

    const [answer, setAnswer] = useState("");
    useEffect(() => {
        setAnswer(props.true_answer);
    }, [props.true_answer]);
    const handleAnswerChange = (event) => {
        const value = event.target.value;
        setAnswer(value);
        props.onQuestionChange({ ...props, true_answer: value });
    };

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

    const [isTextHidden, setIsTextHidden] = useState(true);
    const toggleIsTextHidden = () => {
        setIsTextHidden((prevHidden) => !prevHidden);
    };

    const [error , setError] = useState('');

    const handleDeleteQuestion = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/${props.username}/${props.slug}/${props.class_id}/assignment/${props.assignment_id}/delete/question/${props.id}`
            );
            const { redirectUrl } = response.data;
            window.location.href = redirectUrl;
        } catch (error) {
            const { errors } = error.response.data;
            setError(errors?.classname?.[0] || "");
        }
    };


    console.log(answer)
    return (
        <>
            <div className="shadow my-6 bg-white unselectable py-2 px-3" style={{ borderRadius: "4px" }}>
                <div className="mx-2">
                    <div className="flex w-full  pb-2 justify-between">
                        <div className="flex w-6/12 gap-1">
                            <div className="mt-0.5" style={{ height: "20px" }}>
                                <img className="h-full" src="/assets/pg-icon.svg" />
                            </div>
                            <p className="font16-res-300 my-auto text-gray-500">File</p>
                        </div>
                        <div className="flex  w-5/12 gap-3">
                            <div className="ms-auto w-6/12 text-gray-500">
                                <div className="border border-gray-200 w-full  px-0" style={{ borderRadius: "2px" }}>
                                    <input className="font14-res-300 text-center w-full" type="number" disabled placeholder={"3 menit"} style={{ fontWeight: "500" }} />
                                </div>
                            </div>
                            <div className="ms-auto w-3/12 text-gray-500">
                                <div className="border border-gray-200 w-full" style={{ borderRadius: "2px" }}>
                                    <input className="font14-res-300 text-center w-full" placeholder={"pts"} type="number" value={point} onChange={handlePointChange} style={{ fontWeight: "500" }} />
                                </div>
                            </div>
                            {isRequired ? (
                                <div className="w-1/12 ms-auto">
                                    <div className="text-red-600">
                                        <p className="justify-center" style={{ fontSize: "16px" }}>*</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-1/12 ms-auto"></div>
                            )}
                        </div>
                    </div>
                    <div className="pt-2 flex text-gray-700">
                        <div className="w-full text-gray-600">
                            <div className="text-left font16-res-400 text-gray-600" style={{ overflowWrap: "break-word" }}>
                                <div className="preview font16-res-400 cursor-pointer " onClick={toggleIsTextHidden} dangerouslySetInnerHTML={{ __html: text }} />
                                <div className={`${isTextHidden ? "hidden" : ""} font16-res-400 text-gray-600`}>
                                    <ReactQuill value={text} onChange={handleTextChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {answer ? (
                        <div className="my-5 font16-res-300 text-gray-500">
                            {selectedFile ? (
                                <p>Selected file: {selectedFile.name}</p>
                            ):(
                                <p>Your file: {answer}</p>
                            )}
                        </div>
                    ) :(
                        <div>
                            <input required type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileInputChange} />
                            <button className="mt-6 mb-0" onClick={handleButtonClick}>
                                <div className="mx-auto my-3" style={{ height: "40px" }}>
                                    <img className="mx-auto h-full" src="/assets/upload_file.svg" />
                                </div>
                                <p className="mx-auto text-purple-700 font16-res-300">Upload File</p>
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-full mt-8 mb-3">
                    <div className="flex justify-between">
                            <div>
                                <button onClick={handleDeleteQuestion} className="my-auto">
                                    <div className="px-5 py-2 border-radius-4 bg-red-600 font16-res-300 border border-red-600 text-white hover:px-5 hover:bg-red-700">
                                        <div className="my-auto mx-1">Delete</div>
                                    </div>
                                </button>
                            </div>
                        <div>
                            {isRequired ? (
                                <button onClick={clickRequired} className="my-auto">
                                    <div className="px-5 py-2 border-radius-4 bg-white border border-purple-600 font16-res-300 hover:border-purple-700 hover:text-purple-700 text-purple-600 hover:px-5">
                                        <div className="my-auto mx-1">Set Common</div>
                                    </div>
                                </button>
                            ) : (
                                <button onClick={clickRequired} className="my-auto">
                                    <div className="px-5 py-2 border-radius-4 bg-purple-600 hover:bg-purple-700 text-white border border-purple-600 font16-res-300 hover:border-purple-700 hover:px-5">
                                        <div className="my-auto mx-1">Set Required</div>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
