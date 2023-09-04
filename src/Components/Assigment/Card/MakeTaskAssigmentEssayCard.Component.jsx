import React, { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export const MakeTaskAssigmentEssayCardComponent = (props) => {
    const handlePaste = (event) => {
        event.preventDefault(); // Prevent the default paste behavior
    };

    const [text, setText] = useState('isi dengan soal mu');
    const [answer, setAnswer] = useState('');
    const [point, setPoint] = useState(1);
    const [isRequired, setIsRequired] = useState(0);

    const [isTextHidden, setIsTextHidden] = useState(true);

    const toggleIsTextHidden = () => {
        setIsTextHidden((prevHidden) => !prevHidden);
    };

    const handleTextChange = (value) => {
        setText(value);
        props.onQuestionChange({ question: value });
    };

    const handleAnswerChange = (event) => {
        const value = event.target.value;
        setAnswer(value);
        props.onQuestionChange({ trueAnswer: value });
    };

    const handlePointChange = (event) => {
        const value = parseInt(event.target.value);
        setPoint(value);
        props.onQuestionChange({ point: value });
    };

    const clickRequired = () => {
        setIsRequired(isRequired === 0 ? 1 : 0);
        props.onQuestionChange({ required: isRequired });
    };

    return (
        <>
            <div className="shadow my-6 bg-white unselectable py-2 px-3" style={{ borderRadius:"4px"}}>
                <div className="mx-2">
                    <div className="flex w-full  pb-2 justify-between">
                        <div className="flex w-6/12 gap-1">
                            <div className="mt-0.5" style={{ height:"20px"}}>
                                <img className="h-full" src="/assets/pg-icon.svg"/>
                            </div>
                            <p className="font16-res-300 my-auto text-gray-500">Essai</p>
                        </div>
                        <div className="flex  w-5/12 gap-3">
                            <div className="ms-auto w-6/12 text-gray-500">
                                <div className="border border-gray-200 w-full  px-0" style={{ borderRadius:"2px"}}>
                                    <input className="font14-res-300 text-center w-full"  type="number" disabled  placeholder={"5 menit"}  style={{  fontWeight: "500" }} />
                                </div>
                            </div>
                            <div className="ms-auto w-3/12 text-gray-500">
                                <div className="border border-gray-200 w-full" style={{ borderRadius:"2px"}}>
                                    <input className="font14-res-300 text-center w-full" placeholder={"pts"} type="number" value={point} onChange={handlePointChange} style={{  fontWeight: "500" }} />
                                </div>
                            </div>
                            {isRequired ? (
                                <div className="w-1/12 ms-auto">

                                </div>
                            ) : (

                                <div className="w-1/12 ms-auto">
                                <div className="text-red-600">
                                <p className="justify-center" style={{ fontSize: "16px" }}>*</p>
                    </div>
                </div>
                            )}
                        </div>
                    </div>
                    <div className="pt-2 flex text-gray-700">
                        <div className="w-full text-gray-600">
                            <div className="text-left font16-res-400 text-gray-600" style={{ overflowWrap: "break-word" }}>
                                <div className="preview font16-res-400 cursor-pointer " onClick={toggleIsTextHidden} dangerouslySetInnerHTML={{ __html: text }} />
                                <div className={`${isTextHidden ? 'hidden' : ''} font16-res-400 text-gray-600`}>
                                    <ReactQuill value={text} onChange={handleTextChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-650">
                            <textarea required  onChange={handleAnswerChange} className="mt-4 h-20 font16-res-300 px-2 w-full border" placeholder="Buat jawaban" value={answer}></textarea>
                        </div>
                        {props.errorTrueAnswer === "" ? (
                            <div className="my-0.5"></div>
                        ): (
                            <div className="mt-0.5  border-t text-left">
                                <span className="text-red-600 font14-res-300">{props.errorTrueAnswer}</span>
                            </div>
                        )}
                    </div>
                    <div className="w-full mt-2 mb-3">
                        <div className="flex justify-between" >
                            <button onClick={props.funcDelete} className="my-auto">
                                <div className="px-5 py-2 border-radius-4 bg-red-600 font16-res-300  border border-red-600  text-white hover:px-5 hover:bg-red-700  ">
                                    <div className="my-auto mx-1 " >
                                        Delete
                                    </div>
                                </div>
                            </button>
                            <div>
                                <button onClick={clickRequired} className="my-auto">
                                    <div className={`px-5 py-2 border-radius-4 bg-${isRequired ? 'purple-600 hover:bg-purple-700 text-white border border-purple-600 font16-res-300 hover:border-purple-700 hover:px-5': 'white border border-purple-600 font16-res-300 hover:border-purple-700 hover:text-purple-700 text-purple-600 hover:px-5' }`}>
                                        <div className="my-auto mx-1">
                                            {isRequired ?  'Set Required' : 'Set Common'}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
