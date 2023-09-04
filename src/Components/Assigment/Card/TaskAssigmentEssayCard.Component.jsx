import React, {useEffect, useState} from "react";
import axios from "axios";
import ReactQuill from "react-quill";

export const TaskAssigmentEssayCardComponent = (props) => {

    const [question , setQuestion] = useState('');
    useEffect(() => {
        setQuestion(props.question);
    }, [props.question]);

    const [point, setPoint] = useState(1);
    const [time, setTime] = useState("3 menit");



    const [inputAnswer, setInputAnswer] = useState(props.prevAnswer || ""); // Set the default value based on props.prevAnswer

    const handleInputAnswerChange = (key) => {
        setInputAnswer(key);
        const updatedAnswer = {
            answer: key,
            question_id: props.id,
        }
        props.onAnswerChange(updatedAnswer);
    };


    const [isRequired, setIsRequired] = useState(false);
    useEffect(() => {
        setIsRequired(props.required);
    }, [props.required]);

    const handlePaste = (event) => {
        event.preventDefault(); // Prevent the default paste behavior
    };

    return(
        <>
            <div className="shadow lg:my-2 sm:my-3 my-6  pt-4 bg-white unselectable pb-2 px-3" style={{ borderRadius:"4px"}}>
                <div className="mx-2">
                    <div className="flex w-full  pb-2 justify-between">
                        <div className="flex w-6/12 gap-1">
                            <div className="mt-0" style={{ height:"20px"}}>
                                <img className="h-full" src="/assets/pg-icon.svg"/>
                            </div>
                            <p className="font14-res-300 md:font15-res-300 my-auto text-gray-500">Essai</p>
                        </div>
                        <div className="flex  w-5/12 gap-3">
                            <div className="ms-auto w-6/12 text-gray-500">
                                <div className=" w-full font14-res-300 md:font15-res-300 " >
                                    <input className="border font14-res-300 md:font15-res-300 border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius:"2px" , fontWeight:"500"}} placeholder={"minute"} type="text" value={time} disabled  />
                                </div>
                            </div>
                            <div className="ms-auto w-3/12 text-gray-500">
                                <div className=" w-full font14-res-300 md:font15-res-300" >
                                    <input className="border font14-res-300 md:font15-res-300  border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius:"2px" , fontWeight:"500"}} placeholder={"pts"} type="number" value={point} disabled  />
                                </div>
                            </div>
                            {isRequired === 1 ? (
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
                    <div className="pt-1 flex text-gray-700">
                        <div className="w-full text-gray-600">
                            <div className="text-left font15-res-300 md:font16-res-300 text-gray-600" style={{ overflowWrap: "break-word" }}>
                                <div className="preview font15-res-300 md:font16-res-300 cursor-pointer " dangerouslySetInnerHTML={{ __html: question }}/>
                                <div className='font15-res-300 md:font16-res-300 text-gray-600'>
                                    {/*{question}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-650">
                            <textarea required value={inputAnswer}  onChange={(event) => handleInputAnswerChange(event.target.value)} className="my-4 py-2 bg-white h-20 font16-res-300 px-2 w-full border" placeholder="Buat jawaban"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}