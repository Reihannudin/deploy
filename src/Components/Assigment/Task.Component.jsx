import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {TaskAssigmentPGCardComponent} from "./Card/TaskAssigmentPGCard.Component";
import {TaskAssigmentEssayCardComponent} from "./Card/TaskAssigmentEssayCard.Component";
import {TaskAssigmentFileCardComponent} from "./Card/TaskAssigmentFileCard.Component";

export const TaskComponent = (props) => {

    const { id, action, slug } = useParams();
    const user = JSON.parse(localStorage.getItem("whoLogin"));
    const userId = user.id;

    const [answers, setAnswers] = useState(() => {
        const storedAnswers = localStorage.getItem("answerAssignmentData");
        return storedAnswers ? JSON.parse(storedAnswers) : [];
    });

    const handleAnswerChange = (index, updatedAnswer) => {
        const newAnswer = {
            answer: updatedAnswer.answer,
            question_id: updatedAnswer.question_id,
            assignment_id: id,
            action_assignment_id: action,
            type: "PG",
            user_id: userId,
        };

        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[index] = newAnswer;
            return updatedAnswers;
        });
    };

    const [prevAnswer, setPrevAnswer] = useState([]);

    useEffect(() => {
        const initialPrevAnswer = props.question.map(() => ({ }));
        setPrevAnswer(initialPrevAnswer);
    }, [props.question]);

// Rest of your code...


    useEffect(() => {
        const getPrevAnswer = () => {
            try {
                const answerDataFromLocalStorage = localStorage.getItem("answerAssignmentData");
                if (answerDataFromLocalStorage) {
                    setPrevAnswer(JSON.parse(answerDataFromLocalStorage));
                }
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };

        getPrevAnswer();
    }, []);

    useEffect(() => {
        localStorage.setItem("answerAssignmentData", JSON.stringify(answers));
    }, [answers]);

    console.log("answer", answers);
    console.log("pre answer", prevAnswer);


    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let changeAction = parseInt(props.out_app);


    return (
        <>
            <div
                className="h-full mx-auto md:pt-16 pt-10 px-0"
                style={{ minWidth: "300px" }}
            >
                <div className="lg:flex xl:w-9/12 lg:w-10/12 md:w-10/12 w-11/12 mx-auto">
                    <div className="w-full mx-auto block lg:flex lg:justify-between">
                        <div className="lg:w-5/12 md:w-full sm:w-11/12 w-full mx-auto my-8 lg:mx-0">
                            <div className="lg:shadow shadow-none border-b  mt-3 lg:w-11/12 bg-white my-6 md:px-2 px-1 w-full pb-1 border-radius-12">
                                <div className="lg:mx-4 mx-0 text-left  border-b pb-2 border-b-gray-200 lg:pt-5 pt-2 mb-3 ">
                                    <h2
                                        className="font16-res-400 md:font18-res-300"
                                        style={{ color: "#646464", fontWeight: "500" }}
                                    >
                                        Keterangan task
                                    </h2>
                                    <p className="my-3 font13-res-300 md:font14-res-300 text-gray-500">
                                        Pastikan anda mengerjakan sebelum tenggat waktu, jika lewat
                                        dari tenggat waktu tugas akan dikirmkan secara otomatis
                                        dengan jawaban yang anda miliki.
                                    </p>
                                    <p className="my-3 font13-res-300 md:font14-res-300 text-gray-500">
                                        Anda tidak diperbolehkan untuk menghidupkan internet saat
                                        selama mengrjakan tugas jika anda memaksa untuk tetap
                                        menaktifkan internet anda akan terlempar keluar kehalama
                                        utama dan kesempata mengerjakan akan berkurang
                                    </p>
                                </div>

                                <div className="block lg:mx-4 mx-0" style={{ color: "#646464" }}>
                                    <div className="flex lg:block justify-between">
                                        <div className="text-left  mb-2 border-radius-4 lg:w-full  w-5/12 ">
                                            <div className=" w-full">
                                                <label className="my-0 py-0 font13-res-300 md:font14-res-300">
                                                    Time
                                                </label>
                                                <p className="my-0 py-0 font14-res-300">
                                                    {hours + ":" + minutes + ":" + seconds}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-left  mb-2 border-radius-4 lg:w-full w-5/12 mx-auto">
                                            <div className=" w-full">
                                                <label className="my-0 py-0 font13-res-300 md:font14-res-300">
                                                    Deadline
                                                </label>
                                                <p className="my-0 py-0 font14-res-300">
                                                    {props.end_time} - {props.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 ">
                                                <p>Point</p>
                                                <p className="my-1  font14-res-300">
                                                    {props.point} Points
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 ">
                                                <p>Teacher</p>
                                                <p className="my-1  font14-res-300">
                                                    {props.teacher}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-1 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan pengerjaan</p>
                                            <p className="my-1 font-semibold font14-res-300">{props.change} kali</p>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-4 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan telah keluar saat pengerjaan</p>
                                            <p className="my-1 font-semibold font14-res-300">{changeAction} kali</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-8/12 lg:w-7/12 md:w-full sm:w-11/12 w-full lg:ms-2 me-auto ms-auto  my-8">
                            <ul className="">
                                {prevAnswer.length === 0 ? (
                                    <div>
                                        {props.question.map((item, index) => {
                                            return (
                                                <li key={item.id} className="mb-6">
                                                    <div >
                                                        {item.type === "PG" ? (
                                                            <TaskAssigmentPGCardComponent
                                                                onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                id={item.id}
                                                                // prevAnswer={itemAnswer.answer}
                                                                question={item.question}
                                                                answer_a={item.answer_a}
                                                                answer_b={item.answer_b}
                                                                answer_c={item.answer_c}
                                                                answer_d={item.answer_d}
                                                                required={item.required}
                                                            />
                                                        ) : item.type === "Essay" ? (
                                                            <TaskAssigmentEssayCardComponent
                                                                onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                id={item.id}
                                                                // prevAnswer={itemAnswer.answer}
                                                                question={item.question}
                                                                required={item.required}
                                                            />
                                                        ) : (
                                                            <TaskAssigmentFileCardComponent />
                                                        )}
                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </div>
                                ): (
                                    <div>
                                        {props.question.map((item, index) => {
                                            const itemAnswer = prevAnswer[index];
                                            return (
                                                <li key={item.id} className="mb-6">
                                                    {itemAnswer && itemAnswer.answer !== null ? (
                                                        <div key={index}>
                                                            {item.type === "PG" ? (
                                                                <TaskAssigmentPGCardComponent
                                                                    onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                    id={item.id}
                                                                    prevAnswer={itemAnswer.answer}
                                                                    question={item.question}
                                                                    answer_a={item.answer_a}
                                                                    answer_b={item.answer_b}
                                                                    answer_c={item.answer_c}
                                                                    answer_d={item.answer_d}
                                                                    required={item.required}
                                                                />
                                                            ) : item.type === "Essay" ? (
                                                                <TaskAssigmentEssayCardComponent
                                                                    onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                    id={item.id}
                                                                    prevAnswer={itemAnswer.answer}
                                                                    question={item.question}
                                                                    required={item.required}
                                                                />
                                                            ) : (
                                                                <TaskAssigmentFileCardComponent />
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div key={index}>
                                                            {item.type === "PG" ? (
                                                                <TaskAssigmentPGCardComponent
                                                                    onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                    id={item.id}
                                                                    question={item.question}
                                                                    answer_a={item.answer_a}
                                                                    answer_b={item.answer_b}
                                                                    answer_c={item.answer_c}
                                                                    answer_d={item.answer_d}
                                                                    required={item.required}
                                                                />
                                                            ) : item.type === "Essay" ? (
                                                                <TaskAssigmentEssayCardComponent
                                                                    onAnswerChange={(updateAnswer) => handleAnswerChange(index, updateAnswer)}
                                                                    id={item.id}
                                                                    question={item.question}
                                                                    required={item.required}
                                                                />
                                                            ) : (
                                                                <TaskAssigmentFileCardComponent />
                                                            )}
                                                        </div>

                                                    )}
                                                </li>
                                            );
                                        })}
                                    </div>


                                )}

                            </ul>
                            <div className="mt-10 border-t ">
                                <div className="flex pt-8 border-t gap-4 ">
                                    <a href={`/view/${slug}/${action}/detail/review/assignment/${id}`}
                                        className="w-4/12  ms-auto   weverse-background-btn  hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
                                        style={{
                                            color: "#ffffff",
                                            borderRadius: "4px",
                                            fontSize: "15px",
                                            border: "1px solid #A373E9",
                                        }}
                                    >
                                        Selanjutnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};