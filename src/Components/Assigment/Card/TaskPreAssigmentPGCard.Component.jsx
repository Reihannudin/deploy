import React, { useEffect, useState } from "react";

export const TaskPreAssigmentPGCardComponent = (props) => {
    const [question, setQuestion] = useState("");
    useEffect(() => {
        setQuestion(props.question);
    }, [props.question]);

    const [point, setPoint] = useState(1);

    const [time, setTime] = useState("3 menit");

    const [answers, setAnswers] = useState({
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
    });

    useEffect(() => {
        setAnswers({
            answerA: props.answer_a,
            answerB: props.answer_b,
            answerC: props.answer_c,
            answerD: props.answer_d,
        });
    }, [props.answer_a, props.answer_b, props.answer_c, props.answer_d]);

    return (
        <>
            <div className="shadow  lg:my-2  sm:my-3 my-6 pt-4 bg-white unselectable pb-2 px-3" style={{ borderRadius: "4px" , maxHeight:"265px" }}>
                <div className="mx-2 ">
                    <div className="flex w-full  pb-2 justify-between">
                        <div className="flex w-6/12 gap-1">
                            <div className="mt-0" style={{ height: "20px" }}>
                                <img className="h-full" src="/assets/pg-icon.svg" />
                            </div>
                            <p className="font14-res-300 md:font15-res-300 my-auto text-gray-500">Pilihan Ganda</p>
                        </div>
                        <div className="flex  w-5/12 gap-3">
                            <div className="ms-auto w-6/12 text-gray-500">
                                <div className="w-full font14-res-300 md:font15-res-300 0">
                                    <input className="border font14-res-300 md:font15-res-300   border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius: "2px", fontWeight: "500" }} placeholder="minute" type="text" value={time} disabled />
                                </div>
                            </div>
                            <div className="ms-auto w-3/12 text-gray-500">
                                <div className="w-full font14-res-300 md:font15-res-300 ">
                                    <input className="border font14-res-300 md:font15-res-300  border-gray-200 text-center w-full cursor-no-drop" style={{ borderRadius: "2px", fontWeight: "500" }} placeholder="pts" type="number" value={point} disabled />
                                </div>
                            </div>
                            {props.required === 1 ? (
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
                            <div className="text-left font15-res-300 md:font16-res-300 text-gray-600" style={{ overflowWrap: "break-word" }}>
                                <div className="preview  font15-res-300 md:font16-res-300 cursor-pointer" dangerouslySetInnerHTML={{ __html: question }}></div>
                                <div className="font15-res-300 md:font16-res-300text-gray-600">{/*{question}*/}</div>
                            </div>
                        </div>
                    </div>
                    <ul className="text-gray-500">
                        <li className="my-2">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input className="my-auto font14-res-300 cursor-pointer" type="radio" disabled />
                                    <input type="text" disabled placeholder="Tuliskan jawaban untuk soal" className="w-full bg-white font15-res-300 md:font16-res-300 py-2 text-gray-500" />
                                </div>
                                {props.errorAnswerA === "" ? (
                                    <div className="my-0.5"></div>
                                ) : (
                                    <div className="mt-0.5 mx-7 text-left">
                                        <span className="text-red-600 font14-res-300">{props.errorAnswerA}</span>
                                    </div>
                                )}
                            </label>
                        </li>
                        <li className="my-2">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input className="my-auto font14-res-300 cursor-pointer" type="radio" disabled />
                                    <input type="text" placeholder="Tuliskan jawaban untuk soal" disabled className="w-full font15-res-300 md:font16-res-300 bg-white py-2 text-gray-500" />
                                </div>
                                {props.errorAnswerB === "" ? (
                                    <div className="my-0.5"></div>
                                ) : (
                                    <div className="mt-0.5 mx-7 text-left">
                                        <span className="text-red-600 bg-white font14-res-300">{props.errorAnswerB}</span>
                                    </div>
                                )}
                            </label>
                        </li>
                        <li className="my-2">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input className="my-auto font14-res-300 bg-white cursor-pointer" disabled type="radio" />
                                    <input type="text" placeholder="Tuliskan jawaban untuk soal" disabled className="w-full font15-res-300 md:font16-res-300 bg-white py-2 text-gray-500" />
                                </div>
                                {props.errorAnswerC === "" ? (
                                    <div className="my-0.5"></div>
                                ) : (
                                    <div className="mt-0.5 mx-7 text-left">
                                        <span className="text-red-600 font14-res-300">{props.errorAnswerC}</span>
                                    </div>
                                )}
                            </label>
                        </li>
                        <li className="my-2">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input className="my-auto font14-res-300 cursor-pointer" disabled type="radio" />
                                    <input placeholder="Tuliskan jawaban untuk soal" disabled className="w-full font15-res-300 md:font16-res-300 bg-white py-2 text-gray-500" />
                                </div>
                                {props.errorAnswerD === "" ? (
                                    <div className="my-0.5"></div>
                                ) : (
                                    <div className="mt-0.5 mx-7 text-left">
                                        <span className="text-red-600 font14-res-300">{props.errorAnswerD}</span>
                                    </div>
                                )}
                            </label>
                        </li>
                    </ul>
                    <div>
                        {props.errorTrueAnswer === "" ? (
                            <div className="my-1"></div>
                        ) : (
                            <div className="my-1 text-left">
                                <span className="text-red-600 font14-res-300">{props.errorTrueAnswer}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

