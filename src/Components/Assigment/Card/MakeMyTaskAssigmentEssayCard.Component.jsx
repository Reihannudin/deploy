import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import {Link} from "react-router-dom";
import axios from "axios";

export const MakeMyTaskAssigmentEssayCardComponent = (props) =>{

    const [text, setText] = useState('');
    useEffect(() => {
        setText(props.question);
    }, [props.question]);
    const handleTextChange = (value) => {
        setText(value);
        props.onQuestionChange({ question: value });
    };

    const [answer, setAnswer] = useState('');
    useEffect(() => {
        setAnswer(props.true_answer);
    }, [props.true_answer]);
    const handleAnswerChange = (event) => {
        const value = event.target.value;
        setAnswer(value);
        props.onQuestionChange({ ...props, true_answer: value });
    };


    const [point, setPoint] = useState(1);
    useEffect(() => {
        setPoint(props.point);
    } , [props.point])
    const handlePointChange = (event) => {
        const value = parseInt(event.target.value);
        setPoint(value);
        props.onQuestionChange({ point: value });
    };

    const [isRequired, setIsRequired] = useState(false);
    useEffect(() => {
        setIsRequired(props.required);
    }, [props.required]);
    const clickRequired = () => {
        setIsRequired((prevHidden) => !prevHidden);
        props.onQuestionChange({ required: !isRequired });
    };

    const [isTextHidden , setIsTextHidden ] = useState(true);
    const toggleIsTextHidden = () => {
        setIsTextHidden((prevHidden) =>!prevHidden);
    }

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


    return(
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
                                    <input className="font14-res-300 text-center w-full"  type="number" disabled placeholder={"5 menit"}  style={{  fontWeight: "500" }} />
                                </div>
                            </div>
                            <div className="ms-auto w-3/12 text-gray-500">
                                <div className="border border-gray-200 w-full" style={{ borderRadius:"2px"}}>
                                    <input className="font14-res-300 text-center w-full" placeholder={"pts"} type="number" value={point} onChange={handlePointChange} style={{  fontWeight: "500" }} />
                                </div>
                            </div>
                            {isRequired ? (
                                <div className="w-1/12 ms-auto">
                                    <div className="text-red-600">
                                        <p className="justify-center" style={{ fontSize: "16px" }}>*</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-1/12 ms-auto">

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
                            <textarea required value={answer}  onChange={handleAnswerChange} className="my-4 h-20 font16-res-300 px-2 w-full border" placeholder="Buat jawaban"></textarea>
                        </div>
                    </div>
                    <div className="w-full mt-6 mb-3">
                        <div className="flex justify-between font16-res-400">
                            <div className="my-auto">
                                <button onClick={handleDeleteQuestion} className="my-auto">
                                    <div  className="px-5 py-2 border-radius-4 bg-red-600 text-white hover:px-5 hover:bg-red-700  ">
                                        <div className="my-auto mx-1 " style={{ height:"24px"}}>
                                            Delete
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div>
                                {isRequired ? (
                                    <button className="my-0" onClick={clickRequired}>
                                        <div className="px-5 py-2 border-radius-4 bg-white border border-purple-600 hover:border-purple-700 hover:text-purple-700 text-purple-700 hover:px-5">
                                            <div className="my-auto mx-1 font16-res-400 h-6">
                                                Set Common
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <button className="my-0" onClick={clickRequired}>
                                        <div className="px-5 py-2 border-radius-4 bg-purple-500 hover:bg-purple-700 border border-purple-600 text-white hover:border-purple-700 hover:px-5">
                                            <div className="my-auto mx-1 font16-res-400 h-6">
                                                Set Required
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}