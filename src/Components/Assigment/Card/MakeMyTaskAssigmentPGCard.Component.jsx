import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export const MakeMyTaskAssigmentPGCardComponent = (props) => {

    const [text, setText] = useState("");
    const [point, setPoint] = useState(1);
    const [isTextHidden, setIsTextHidden] = useState(true);

    const [id, setId] = useState("");

    useEffect(() => {
        setId(props.id);
    }, [props.id]);
    const handleIdChange = (value) => {
        setId(value);
        props.onQuestionChange({ id: id});
    };

    const [type, setType] = useState("");

    useEffect(() => {
        setType(props.type);
    }, [props.type]);
    const handleTypeChange = (value) => {
        setType(value);
        props.onQuestionChange({ question_id: type});
    };

    useEffect(() => {
        setText(props.question);
    }, [props.question]);
    const handleTextChange = (value) => {
        setText(value);
        props.onQuestionChange({ question: text });
    };

    const [answers, setAnswers] = useState({
        answerA: props.answer_a || "",
        answerB: props.answer_b || "",
        answerC: props.answer_c || "",
        answerD: props.answer_d || "",
    });

    const handleAnswerChange = (event, key) => {
        const value = event.target.value;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [key]: value,
        }));
        props.onQuestionChange({ [key]: value });
    };

    const [trueAnswer, setTrueAnswer] = useState("");
    useEffect(() => {
        setTrueAnswer(props.true_answer);
    }, [props.true_answer]);

    console.log(trueAnswer);
    const handleTrueAnswerChange = (key) => {
        setTrueAnswer(key);
        props.onQuestionChange({ trueAnswer: key });
    };


    const handlePointChange = (event) => {
        const value = parseInt(event.target.value);
        setPoint(value);
        props.onQuestionChange({ point: point });
    };


    const [isRequired, setIsRequired] = useState(0);
    useEffect(() => {
        setIsRequired(props.required);
    }, [props.required]);
    const clickRequired = () => {
        setIsRequired((prevHidden) => !prevHidden);
        props.onQuestionChange({ required: !isRequired });
    };
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


    return (
        <div className="shadow my-6 bg-white unselectable py-2 px-3" style={{ borderRadius:"4px"}}>
            <input className="hidden" onChange={handleIdChange}/>
            <div className="mx-2">
                <div className="flex w-full  pb-2 justify-between">
                    <div className="flex w-6/12 gap-1">
                        <div className="mt-0.5" style={{ height:"20px"}}>
                            <img className="h-full" src="/assets/pg-icon.svg"/>
                        </div>
                        <p className="font16-res-300 my-auto text-gray-500">Pilihan Ganda</p>
                    </div>
                    <div className="flex  w-5/12 gap-3">
                        <div className="ms-auto w-6/12 text-gray-500">
                            <div className="border border-gray-200 w-full  px-0" style={{ borderRadius:"2px"}}>
                                <input className="font14-res-300 text-center w-full"  type="number" disabled placeholder={"3 menit"}  style={{  fontWeight: "500" }} />
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
                    <ul className="text-gray-500">
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === props.answer_a}
                                        onChange={() => handleTrueAnswerChange(answers.answerA)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={props.answer_a}
                                        value={answers.answerA}
                                        onChange={(event) => handleAnswerChange(event, 'answerA')}

                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                            </label>
                        </li>
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === props.answer_b}
                                        onChange={() => handleTrueAnswerChange(answers.answerB)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={props.answer_b}
                                        value={answers.answerB}
                                        onChange={(event) => handleAnswerChange(event, 'answerB')}

                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                            </label>
                        </li>

                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === props.answer_c}
                                        onChange={() => handleTrueAnswerChange(answers.answerC)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={props.answer_c}
                                        value={answers.answerC}
                                        onChange={(event) => handleAnswerChange(event, 'answerC')}

                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                            </label>
                        </li>

                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === props.answer_d}
                                        onChange={() => handleTrueAnswerChange(answers.answerD)}
                                    />
                                    <input
                                        type="text"
                                        placeholder={props.answer_d}
                                        value={answers.answerD}
                                        onChange={(event) => handleAnswerChange(event, 'answerD')}

                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                            </label>
                        </li>

                    </ul>
                    <div className="w-full mt-6 mb-3">
                        <div className="flex justify-between" >
                            <button onClick={handleDeleteQuestion} className="my-auto">
                                <div className="px-5 py-2 border-radius-4 bg-red-600 font16-res-300  border border-red-600  text-white hover:px-5 hover:bg-red-700  ">
                                    <div className="my-auto mx-1 " >
                                        Delete
                                    </div>
                                </div>
                            </button>
                            <div>
                                {isRequired ? (
                                    <button onClick={clickRequired} className="my-auto">
                                        <div className="px-5 py-2 border-radius-4 bg-white border border-purple-600 font16-res-300  hover:border-purple-700 hover:text-purple-700 text-purple-600 hover:px-5   ">
                                            <div className="my-auto mx-1 " >
                                                Set Common
                                            </div>
                                        </div>
                                    </button>
                                ) : (
                                    <button onClick={clickRequired} className="my-auto">
                                        <div className="px-5 py-2 border-radius-4 bg-purple-600 hover:bg-purple-700 text-white  border border-purple-600 font16-res-300  hover:border-purple-700  hover:px-5   ">
                                            <div className="my-auto mx-1 " >
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
        </div>
    );
};
