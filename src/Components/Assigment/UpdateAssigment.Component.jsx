import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {MakeTaskAssigmentPGCardComponent} from "../Card/Task/Assignment/MakeTaskAssigmentPGCard.Component";
import {MakeTaskAssigmentEssayCardComponent} from "../Card/Task/Assignment/MakeTaskAssigmentEssayCard.Component";
import {MakeTaskAssigmentLinkCardComponent} from "../Card/Task/Assignment/MakeTaskAssigmentLinkCard.Component";
import {TaskAssigmentPGCardComponent} from "../Card/Task/Assignment/TaskAssigmentPGCard.Component";
import {MakeMyTaskAssigmentPGCardComponent} from "../Card/Task/Assignment/MakeMyTaskAssigmentPGCard.Component";
import {MakeMyTaskAssigmentEssayCardComponent} from "../Card/Task/Assignment/MakeMyTaskAssigmentEssayCard.Component";
import {MakeMyTaskAssigmentLinkCardComponent} from "../Card/Task/Assignment/MakeMyTaskAssigmentLinkCard.Component";
import axios from "axios";

export const UpdateAssigmentComponent = (props) => {

    const [searchParams ] = useSearchParams();
    const [errorName , setErrorName] = useState('');
    const [errorChange , setErrorChange] = useState('');
    const [errorStartTime , setErrorStartTime] = useState('');
    const [errorEndTime , setErrorEndTime] = useState('');
    const [errorDate , setErrorDate] = useState('');

    useEffect(() => {
        const error = searchParams.get('error_name');
        setErrorName(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_change');
        setErrorChange(error)
    } , [searchParams])


    useEffect(() => {
        const error = searchParams.get('error_start_time');
        setErrorStartTime(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_end_time');
        setErrorEndTime(error)
    } , [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_date');
        setErrorDate(error)
    } , [searchParams])

    const [name, setName] = useState('');
    useEffect(() => {
        setName(props.name);
    } , [props.name])
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const [change , setChange] = useState('');
    useEffect(() => {
        setChange(props.change);
    } , [props.change])
    const onChangeChange = (event) => {
        const change = event.target.value;
        setChange(change);
    };

    const [date, setDate] = useState( "");
    useEffect(() => {
        setDate(props.date);
    } , [props.date])
    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    };

    const [startTime, setStartTime] = useState( "");
    useEffect(() => {
        setStartTime(props.start_time);
    } , [props.start_time])
    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime);
    };

    const [endTime, setEndTime] = useState("");
    useEffect(() => {
        setEndTime(props.end_time);
    } , [props.end_time])
    const onChangeEndTime = (event) => {
        const endTimeValue = event.target.value;
        setEndTime(endTimeValue);
    };

    const [questionsAlready, setQuestionsAlready] = useState([]);

    const handleQuestionsAlreadyChange = (index, updateQuestionAlready) => {
        setQuestionsAlready((prevQuestionAlready) => {
            const updatedQuestionsAlready = [...prevQuestionAlready];
            updatedQuestionsAlready[index] = {...updatedQuestionsAlready[index], ...updateQuestionAlready,};
            return updatedQuestionsAlready;
        });
    };

    const [previousQuestion , setPreviousQuestion] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/${username}/${slug}/my/assignment/${id}/question`);
                const data = response.data;
                setPreviousQuestion(data)
            } catch (error) {
                console.log("Error Fetching Resource Data" , error)
            }
        }
        fetchData()
    } , [])


    const { id, slug , class_id } = useParams();
    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    return (
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="lg:flex lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
                    <form className="w-full">
                        <div className="w-full block lg:flex lg:justify-between">
                            <div className="lg:w-6/12 md:w-11/12 sm:w-11/12 w-full mx-auto mt-3">
                                <div className="flex w-full text-left">
                                    <div className="md:flex block w-full text-left">
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Assignment Name
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="class"
                                                    type="text"
                                                    value={name}
                                                    className="md:w-11/12 w-full py-2.5 font16-res-400 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    onChange={onChangeName}
                                                    placeholder="Your assignment name"
                                                />
                                            </div>
                                            {errorName === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorName}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Work duration
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="work_change"
                                                    type="number"
                                                    value={change}
                                                    onChange={onChangeChange}
                                                    className="md:w-11/12 w-full font16-res-400 py-2.5 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    placeholder="Number of works"
                                                />
                                            </div>
                                            {errorChange === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorChange}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full text-left">
                                    <div className="sm:flex block w-full text-left">
                                        <div className="text-left sm:w-6/12 w-full my-3">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Time Range
                                            </label>
                                            <div className="flex w-full mb-6 mt-1 justify-between">
                                                <div className="mt-0 w-6/12 justify-between mx-auto">
                                                    <div className="flex">
                                                        <input
                                                            id="starttime"
                                                            type="time"
                                                            value={startTime}
                                                            onChange={onChangeStartTime}
                                                            className="w-11/12 font16-res-400 py-2 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="Start Time"
                                                        />
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                        </button>

                                                    </div>
                                                </div>
                                                <div className="mt-0 w-6/12 mx-auto">
                                                    <div className="flex md:w-11/12 w-full">
                                                        <input
                                                            id="endtime"
                                                            type="time"
                                                            value={endTime}
                                                            onChange={onChangeEndTime}
                                                            className="w-11/12 font16-res-400 py-2 border-b-gray-300"
                                                            style={{ borderBottom: "1px solid #ebebeb" }}
                                                            placeholder="End Time"
                                                        />
                                                        <button>
                                                            <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {errorStartTime === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorStartTime}</span>
                                                </div>
                                            )}
                                            {errorEndTime === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorEndTime}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-3 sm:w-6/12 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Date
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="subject"
                                                    type="date"
                                                    value={date}
                                                    onChange={onChangeDate}
                                                    className="md:w-11/12 w-full font16-res-400 py-2.5 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    placeholder="Date"
                                                />
                                            </div>
                                            {errorDate === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorDate}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-6/12 md:w-11/12 sm:w-9/12 mx-auto mt-3">
                                <div className="lg:w-10/12  w-full lg:mx-auto">
                                    <div className="flex justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
                                        <h2 className="my-3" style={{ fontSize:"20px" , color:"#8D2EF4"}} >Soal</h2>
                                        <p className="my-auto" style={{ fontSize:"16px" , color:"#8D2EF4"}} >1 Soal</p>
                                    </div>
                                </div>
                                <div>
                                    {previousQuestion.map((item , index) => {
                                        return (
                                            <div key={item.id} className="xl:w-9/12 lg:w-10/12 w-full lg:mx-auto my-4">
                                                <ul className="py-0">
                                                    {item.type === "PG" ? (
                                                        <div className="py-0 my-0">
                                                            <MakeMyTaskAssigmentPGCardComponent
                                                                username={username}
                                                                slug={slug}
                                                                assignment_id={id}
                                                                id={item.id}
                                                                class_id={class_id}
                                                                question={item.question}
                                                                answer_a={item.answer_a}
                                                                point={item.point}
                                                                true_answer={item.true_answer}
                                                                answer_b={item.answer_b}
                                                                answer_c={item.answer_c}
                                                                answer_d={item.answer_d}
                                                                onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
                                                            />
                                                        </div>
                                                    ) : item.type === "Essay" ? (
                                                        <div className="py-0 my-0">
                                                            <MakeMyTaskAssigmentEssayCardComponent
                                                                username={username}
                                                                slug={slug}
                                                                assignmentId={id}
                                                                id={item.id}
                                                                required={item.required}
                                                                true_answer={item.true_answer}
                                                                question={item.question}
                                                                point={item.point}
                                                                onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
                                                            />
                                                        </div>
                                                    ) : item.type === "Link" ? (
                                                        <div className="py-0 my-0">
                                                            <MakeMyTaskAssigmentLinkCardComponent
                                                                username={username}
                                                                slug={slug}
                                                                class_id={class_id}
                                                                assignment_id={id}
                                                                id={item.id}
                                                                question={item.question}
                                                                point={item.point}
                                                                true_answer={item.true_answer}
                                                                onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <h2>Sepertinya ada yang salah</h2>
                                                        </div>
                                                    )}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/*{questions.length > 0 && (*/}
                                {/*    <div className="xl:w-9/12 lg:w-10/12   w-full lg:mx-auto  my-4">*/}
                                {/*        <ul className="py-1">*/}
                                {/*            {questions.map((question, index) => {*/}
                                {/*                return(*/}
                                {/*                    <div key={index}>*/}
                                {/*                        {question.type === "" ? (*/}
                                {/*                            <li className="border-t" key={index}>*/}

                                {/*                            </li>*/}
                                {/*                        ) : (*/}
                                {/*                            <li className="border-t" key={index}>*/}
                                {/*                                /!* Render the appropriate question component based on the question type *!/*/}
                                {/*                                {question.type === 'PG' && (*/}
                                {/*                                    <MakeTaskAssigmentPGCardComponent*/}
                                {/*                                        onChange={onChangeType}*/}
                                {/*                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                {/*                                        funcDelete={() => handleDeleteQuestion(index)}*/}
                                {/*                                    />*/}
                                {/*                                )}*/}
                                {/*                                {question.type === 'Essay' && (*/}
                                {/*                                    <MakeTaskAssigmentEssayCardComponent*/}
                                {/*                                        onChange={onChangeType}*/}
                                {/*                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                {/*                                        funcDelete={() => handleDeleteQuestion(index)}*/}
                                {/*                                    />*/}
                                {/*                                )}*/}
                                {/*                                {question.type === 'Link' && (*/}
                                {/*                                    <MakeTaskAssigmentLinkCardComponent*/}
                                {/*                                        onChange={onChangeType}*/}
                                {/*                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                {/*                                        funcDelete={() => handleDeleteQuestion(index)}*/}
                                {/*                                    />*/}
                                {/*                                )}*/}
                                {/*                            </li>*/}
                                {/*                        )}*/}
                                {/*                    </div>*/}
                                {/*                )*/}
                                {/*            })}*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                                {/*<div className="border-t lg:w-10/12  w-full lg:mx-auto  my-5 ">*/}
                                {/*    <div className="w-full  mt-8  bg-white py-3 px-2 shadow border-radius-12">*/}
                                {/*        <div className="my-3 mx-auto w-full">*/}
                                {/*            <div className="w-full gap-3 grid grid-cols-3  mx-auto">*/}
                                {/*                <div className="relative">*/}
                                {/*                    <div className="w-10/12 mx-auto">*/}
                                {/*                        <button*/}
                                {/*                            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"*/}
                                {/*                            style={{ width: "55px" }}*/}
                                {/*                            onClick={handleButtonPGClick}*/}
                                {/*                        >*/}
                                {/*                            <div style={{ height: "26px" }}>*/}
                                {/*                                <img className="h-full mx-auto" src="/assets/pg-icon.svg" alt="Icon" />*/}
                                {/*                            </div>*/}
                                {/*                        </button>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*                <div className="relative">*/}
                                {/*                    <div className="w-10/12 mx-auto">*/}
                                {/*                        <button*/}
                                {/*                            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"*/}
                                {/*                            style={{ width: "55px" }}*/}
                                {/*                            onClick={handleButtonEssayClick}*/}
                                {/*                        >*/}
                                {/*                            <div style={{ height: "26px" }}>*/}
                                {/*                                <img className="h-full mx-auto" src="/assets/essay-icon.svg" alt="Icon" />*/}
                                {/*                            </div>*/}
                                {/*                        </button>*/}
                                {/*                    </div>*/}

                                {/*                </div>*/}
                                {/*                <div className="relative">*/}
                                {/*                    <div className="w-10/12 mx-auto">*/}
                                {/*                        <button*/}
                                {/*                            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"*/}
                                {/*                            style={{ width: "55px" }}*/}
                                {/*                            onClick={handleButtonLinkClick}*/}
                                {/*                        >*/}
                                {/*                            <div style={{ height: "26px" }}>*/}
                                {/*                                <img className="h-full mx-auto" src="/assets/link-file-icon.svg" alt="Icon" />*/}
                                {/*                            </div>*/}
                                {/*                        </button>*/}
                                {/*                    </div>*/}

                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="flex w-full  lg:w-11/12  lg:mt-10 lg:mb-10 mt-14 mb-14 border-t pt-10  text-right">*/}
                                {/*    <button onSubmit={handleSubmit} className="shadow font16-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white" style={{ borderRadius: "4px" }}>*/}
                                {/*        Update Assignment*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

// const navigate = useNavigate();
// const [redirectUrl, setRedirectUrl] = useState('');
//
// const handleSubmit = (event) => {
//     event.preventDefault();
//
//     const formData = {
//         name,
//         date,
//         start_time: startTime,
//         end_time: endTime
//     };
//
//     axios.put(`http://127.0.0.1:8000/api/${username}/${slug}/${class_id}/update/absent/${id}`, formData)
//         .then((response) => {
//             console.log(response.data)
//             const { redirectUrl } = response.data;
//             setRedirectUrl(redirectUrl);
//         })
//         .catch((error) => {
//             const { errors } = error.response.data;
//
//             setErrorName(errors?.name?.[0] || '');
//             setErrorDate(errors?.date?.[0] || '');
//             setErrorStartTime(errors?.start_time?.[0] || '');
//             setErrorEndTime(errors?.end_time?.[0] || '');
//         });
// };
//
// console.log(name);
//
// useEffect(() => {
//     if (redirectUrl) {
//         const url = new URL(redirectUrl);
//         const searchParams = new URLSearchParams(url.search);
//
//         setErrorName(searchParams.get('error_name') || '');
//         setErrorDate(searchParams.get('error_date') || '');
//         setErrorStartTime(searchParams.get('error_start_time') || '');
//         setErrorEndTime(searchParams.get('error_end_time') || '');
//
//         setName(searchParams.get('name') || '');
//         setDate(searchParams.get('date') || '');
//         setStartTime(searchParams.get('start_time') || '');
//         setEndTime(searchParams.get('end_time') || '');
//
//         searchParams.delete('error_name');
//         searchParams.delete('name');
//         searchParams.delete('error_date');
//         searchParams.delete('date');
//         searchParams.delete('error_start_time');
//         searchParams.delete('start_time');
//
//         url.search = searchParams.toString();
//         window.history.replaceState({}, '', url.href);
//
//         const statusParam = searchParams.get('status');
//
//         if (statusParam === '201') {
//             navigate(`/view/my/class/${id}/${slug}`);
//         }
//
//         setRedirectUrl('');
//     }
// }, [redirectUrl]);

// console.log(previousQuestion);


    // const navigate = useNavigate();
    //
    // const {id, class_id , slug} = useParams()
    //
    // const user = JSON.parse(localStorage.getItem('whoLogin'));
    // const username = user.username
    //
    // const [name, setName] = useState('');
    // useEffect(() => {
    //     setName(props.name);
    // } , [props.name])
    // const onChangeName = (event) => {
    //     const name = event.target.value;
    //     setName(name);
    // };
    //
    //
    // const [point, setPoint] = useState('');
    //
    // const onChangePoint = (event) => {
    //     const point = event.target.value;
    //     setPoint(point);
    // }
    // const [change, setChange] = useState('');
    // useEffect(() => {
    //     setChange(props.change);
    // } , [props.change])
    // const onChangeChange = (event) =>{
    //     const change = event.target.value;
    //     setChange(change);
    // }
    //
    // const [startTime, setStartTime] = useState('');
    // useEffect(() => {
    //     setStartTime(props.start_time);
    // } , [props.start_time])
    // const onChangeStartTime = (event) => {
    //     const startTime = event.target.value;
    //     setStartTime(startTime);
    // }
    //
    // const [endTime, setEndTime] = useState('');
    // useEffect(() => {
    //     setEndTime(props.end_time);
    // }, [props.end_time]); // Add props.end_time as a dependency
    // const onChangeEndTime = (event) => {
    //     const endTime = event.target.value;
    //     setEndTime(endTime);
    // };
    //
    //
    // const [date, setDate] = useState('');
    // useEffect(() => {
    //     setDate(props.date);
    // }, [props.date]);
    // const onChangeDate = (event) => {
    //     const date = event.target.value;
    //     setDate(date);
    // }
    //
    // const [questions, setQuestions] = useState([]);
    //
    // const [question, setQuestion] = useState('');
    // const [inputQuestionPoint, setInputQuestionPoint] = useState('');
    // const [inputQuestionAnswerA, setInputQuestionAnswerA] = useState('');
    // const [inputQuestionAnswerB, setInputQuestionAnswerB] = useState('');
    // const [inputQuestionAnswerC, setInputQuestionAnswerC] = useState('');
    // const [inputQuestionAnswerD, setInputQuestionAnswerD] = useState('');
    // const [inputQuestionType, setInputQuestionType] = useState('PG');
    // const [isRequired, setIsRequired] = useState(false);
    // const [inputQuestionTrueAnswer, setInputQuestionTrueAnswer] = useState('');
    //
    // const handleDeleteQuestion = (index) => {
    //     setQuestions((prevQuestions) => {
    //         const updatedQuestions = [...prevQuestions];
    //         updatedQuestions.splice(index, 1);
    //         return updatedQuestions;
    //     });
    // };
    //
    // const handleQuestionChange = (index, updatedQuestion) => {
    //     setQuestions((prevQuestions) => {
    //         const updatedQuestions = [...prevQuestions];
    //         updatedQuestions[index] = { ...updatedQuestions[index], ...updatedQuestion };
    //         return updatedQuestions;
    //     });
    // };
    //
    // const [questionsAlready, setQuestionsAlready] = useState([]);
    //
    // const handleQuestionsAlreadyChange = (index, updateQuestionAlready) => {
    //     setQuestionsAlready((prevQuestionAlready) => {
    //         const updatedQuestionsAlready = [...prevQuestionAlready];
    //         updatedQuestionsAlready[index] = {...updatedQuestionsAlready[index], ...updateQuestionAlready,};
    //         return updatedQuestionsAlready;
    //     });
    // };
    //
    // // {username}/{slug}/{class_id}/update/assignment/{id}
    //
    //
    // const handleButtonPGClick = () => {
    //     const newQuestion = {
    //         question: question,
    //         point: inputQuestionPoint,
    //         answerA: inputQuestionAnswerA,
    //         answerB: inputQuestionAnswerB,
    //         answerC: inputQuestionAnswerC,
    //         answerD: inputQuestionAnswerD,
    //         trueAnswer: inputQuestionTrueAnswer,
    //         type:  'PG',
    //         required: isRequired,
    //     };
    //
    //     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    //
    //     setQuestion(''); // Clear the question state
    //     setInputQuestionPoint(1);
    //     setInputQuestionAnswerA('');
    //     setInputQuestionAnswerB('');
    //     setInputQuestionAnswerC('');
    //     setInputQuestionAnswerD('');
    //     setInputQuestionTrueAnswer('');
    //     setInputQuestionType('');
    //     setIsRequired(false);
    // };
    //
    // const handleButtonEssayClick = () => {
    //     const newQuestion = {
    //         question: question,
    //         point: inputQuestionPoint,
    //         answerA: inputQuestionAnswerA,
    //         answerB: inputQuestionAnswerB,
    //         answerC: inputQuestionAnswerC,
    //         answerD: inputQuestionAnswerD,
    //         trueAnswer: inputQuestionTrueAnswer,
    //         type: 'Essay',
    //         required: isRequired,
    //     };
    //
    //     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    //
    //     setQuestion(''); // Clear the question state
    //     setInputQuestionPoint(1);
    //     setInputQuestionAnswerA('');
    //     setInputQuestionAnswerB('');
    //     setInputQuestionAnswerC('');
    //     setInputQuestionAnswerD('');
    //     setInputQuestionTrueAnswer('');
    //     setInputQuestionType('');
    //     setIsRequired(false);
    // };
    //
    // const handleButtonLinkClick = () => {
    //     const newQuestion = {
    //         question: question,
    //         point: inputQuestionPoint,
    //         answerA: inputQuestionAnswerA,
    //         answerB: inputQuestionAnswerB,
    //         answerC: inputQuestionAnswerC,
    //         answerD: inputQuestionAnswerD,
    //         trueAnswer: inputQuestionTrueAnswer,
    //         type: 'Link',
    //         required: isRequired,
    //     };
    //
    //     setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    //
    //     setQuestion(''); // Clear the question state
    //     setInputQuestionPoint(1);
    //     setInputQuestionAnswerA('');
    //     setInputQuestionAnswerB('');
    //     setInputQuestionAnswerC('');
    //     setInputQuestionAnswerD('');
    //     setInputQuestionTrueAnswer('');
    //     setInputQuestionType('');
    //     setIsRequired(false);
    // };
    //
    // const onChangeType = () => {
    //     setInputQuestionType(''); // Set inputQuestionType to an empty string
    // };
    //
    // //  ===================================================================================
    //
    // const [searchParams] = useSearchParams();
    // const [errorName, setErrorName] = useState('');
    // const [errorChange, setErrorChange] = useState('');
    // const [errorStartTime, setErrorStartTime] = useState('');
    // const [errorEndTime, setErrorEndTime] = useState('');
    // const [errorDate, setErrorDate] = useState('');
    //
    // useEffect(() => {
    //     setErrorName(searchParams.get('error_name') || '');
    //     setErrorChange(searchParams.get('error_change') || '');
    //     setErrorStartTime(searchParams.get('error_start_time') || '');
    //     setErrorEndTime(searchParams.get('error_end_time') || '');
    //     setErrorDate(searchParams.get('error_date') || '');
    //
    //     setName(searchParams.get('name') || '');
    //     setChange(searchParams.get('change') || '');
    //     setStartTime(searchParams.get('start_time') || '');
    //     setEndTime(searchParams.get('end_time') || '');
    //     setDate(searchParams.get('date') || '');
    // }, [searchParams]);
    //
    //
    // const [redirectUrl, setRedirectUrl] = useState('');
    //
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     const formData = {
    //         name: name,
    //         change: change,
    //         start_time: startTime,
    //         end_time: endTime,
    //         date: date,
    //         questions: questions.map((q) => ({
    //             question: q.question,
    //             point: q.point,
    //             answer_a: q.answerA,
    //             answer_b: q.answerB,
    //             answer_c: q.answerC,
    //             answer_d: q.answerD,
    //             true_answer: q.trueAnswer,
    //             type: q.type,
    //             required: q.required,
    //         })),
    //         questionsAlready : questionsAlready.map((qa) => ({
    //             question: qa.question,
    //             point: qa.point,
    //             answer_a: qa.answerA,
    //             answer_b: qa.answerB,
    //             answer_c: qa.answerC,
    //             answer_d: qa.answerD,
    //             true_answer: qa.trueAnswer,
    //             type: qa.type,
    //             required: qa.required,
    //         })),
    //     };
    //
    //     axios
    //         .post(`http://127.0.0.1:8000/api/${username}/${slug}/${class_id}/update/assignment/${id}`, formData)
    //         .then((response) => {
    //             console.log(response.data);
    //             const { redirectUrl } = response.data;
    //             setRedirectUrl(redirectUrl);
    //         })
    //         .catch((error) => {
    //             console.error(error.response); // Log the error response
    //             const { errors } = error.response.data;
    //
    //             setErrorName(errors?.name?.[0] || '');
    //             setErrorChange(errors?.change?.[0] || '');
    //             setErrorStartTime(errors?.start_time?.[0] || '');
    //             setErrorEndTime(errors?.end_time?.[0] || '');
    //             setErrorDate(errors?.date?.[0] || '');
    //         });
    // };
    //
    // useEffect(() => {
    //     if (redirectUrl) {
    //         const url = new URL(redirectUrl);
    //         const searchParams = new URLSearchParams(url.search);
    //
    //         setErrorName(searchParams.get('error_name') || '');
    //         setErrorChange(searchParams.get('error_change') || '');
    //         setErrorStartTime(searchParams.get('error_start_time') || '');
    //         setErrorEndTime(searchParams.get('error_end_time') || '');
    //         setErrorDate(searchParams.get('error_date') || '');
    //
    //         setName(searchParams.get('name') || '');
    //         setChange(searchParams.get('change') || '');
    //         setStartTime(searchParams.get('start_time') || '');
    //         setEndTime(searchParams.get('end_time') || '');
    //         setDate(searchParams.get('date') || '');
    //
    //         url.search = searchParams.toString();
    //         window.history.replaceState({}, '', url.href);
    //
    //         const statusParam = searchParams.get('status');
    //
    //         if (statusParam === '201') {
    //             navigate(`/view/my/class/${id}/${slug}`);
    //         }
    //
    //         setRedirectUrl('');
    //     }
    // }, [redirectUrl]);
    //
    // console.log(questions);
    //
    // return (
    //     <>
    //         <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
    //             <div className="lg:flex xl:w-9/12 lg:w-10/12 md:w-10/12 w-11/12 mx-auto">
    //                 <form onSubmit={handleSubmit} className="w-full">
    //                     <div className="w-full block lg:flex lg:justify-between">
    //                         <div className="lg:w-6/12 md:w-9/12 sm:w-10/12 w-full mx-auto mt-3">
    //                             <div className="flex w-full text-left">
    //                                 <div className="md:flex block w-full text-left">
    //                                     <div className="mt-3 w-full mx-auto">
    //                                         <label className="font14-res-300" style={{ color: "#777575" }}>
    //                                             Assignment Name
    //                                         </label>
    //                                         <div className="flex md:w-11/12 font16-res-300 text-gray-500 w-full">
    //                                             <input
    //                                                 id="class"
    //                                                 value={name}
    //                                                 onChange={onChangeName}
    //                                                 type="text"
    //                                                 className="md:w-11/12 w-full py-2.5 border-b-gray-300"
    //                                                 style={{ borderBottom: "1px solid #ebebeb" }}
    //                                                 placeholder="Your assignment name"
    //                                             />
    //                                         </div>
    //                                         {errorName === '' ? (
    //                                             <div className="my-1"></div>
    //                                         ) : (
    //                                             <div className="my-1 text-left">
    //                                                 <span className="text-red-600 font14-res-300">{errorName}</span>
    //                                             </div>
    //                                         )}
    //                                     </div>
    //                                     <div className="mt-3 w-full mx-auto">
    //                                         <label className="font14-res-300" style={{ color: "#777575" }}>
    //                                             Work duration
    //                                         </label>
    //                                         <div className="flex md:w-11/12  font16-res-300 text-gray-500  w-full">
    //                                             <input
    //                                                 id="work_change"
    //                                                 type="number"
    //                                                 value={change}
    //                                                 onChange={onChangeChange}
    //                                                 className="md:w-11/12 w-full py-2.5 border-b-gray-300"
    //                                                 style={{ borderBottom: "1px solid #ebebeb" }}
    //                                                 placeholder="Number of works"
    //                                             />
    //                                         </div>
    //                                         {errorChange === '' ? (
    //                                             <div className="my-1"></div>
    //                                         ) : (
    //                                             <div className="my-1 text-left">
    //                                                 <span className="text-red-600 font14-res-300">{errorChange}</span>
    //                                             </div>
    //                                         )}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="flex w-full text-left">
    //                                 <div className="sm:flex block w-full text-left">
    //                                     <div className="text-left sm:w-6/12 w-full my-3">
    //                                         <label className="font14-res-300" style={{ color: "#777575" }}>
    //                                             Time Range
    //                                         </label>
    //                                         <div className="flex w-full mb-6  font16-res-300 text-gray-500  mt-1 justify-between">
    //                                             <div className="mt-0 w-6/12  justify-between mx-auto">
    //                                                 <div className="flex">
    //                                                     <input
    //                                                         id="starttime"
    //                                                         type="time"
    //                                                         value={startTime}
    //                                                         onChange={onChangeStartTime}
    //                                                         className="w-11/12 font16-res-400 py-2 border-b-gray-300"
    //                                                         style={{ borderBottom: "1px solid #ebebeb" }}
    //                                                         placeholder="Start Time"
    //                                                     />
    //                                                     <button>
    //                                                         <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="mt-0 w-6/12 mx-auto">
    //                                                 <div className="flex md:w-11/12 w-full">
    //                                                     <input
    //                                                         id="endtime"
    //                                                         type="time"
    //                                                         value={endTime}
    //                                                         onChange={onChangeEndTime}
    //                                                         className="w-11/12 font16-res-400 py-2 border-b-gray-300"
    //                                                         style={{ borderBottom: "1px solid #ebebeb" }}
    //                                                         placeholder="End Time"
    //                                                     />
    //                                                     <button>
    //                                                         <i className="fa-solid fa-eye-slash" style={{ color: "#777575" }}></i>
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         {errorStartTime === '' ? (
    //                                             <div className="my-1"></div>
    //                                         ) : (
    //                                             <div className="my-1 text-left">
    //                                                 <span className="text-red-600 font14-res-300">{errorStartTime}</span>
    //                                             </div>
    //                                         )}
    //                                         {errorEndTime === '' ? (
    //                                             <div className="my-1"></div>
    //                                         ) : (
    //                                             <div className="my-1 text-left">
    //                                                 <span className="text-red-600 font14-res-300">{errorEndTime}</span>
    //                                             </div>
    //                                         )}
    //                                     </div>
    //
    //                                     <div className="mt-3 sm:w-6/12 w-full mx-auto">
    //                                         <label className="font14-res-300" style={{ color: "#777575" }}>
    //                                             Date
    //                                         </label>
    //                                         <div className="flex md:w-11/12 font16-res-300 text-gray-500 w-full">
    //                                             <input
    //                                                 id="subject"
    //                                                 type="date"
    //                                                 value={date}
    //                                                 onChange={onChangeDate}
    //                                                 className="md:w-11/12 w-full font16-res-400 py-2.5 border-b-gray-300"
    //                                                 style={{ borderBottom: "1px solid #ebebeb" }}
    //                                                 placeholder="Date"
    //                                             />
    //                                         </div>
    //                                         {errorDate === '' ? (
    //                                             <div className="my-1"></div>
    //                                         ) : (
    //                                             <div className="my-1 text-left">
    //                                                 <span className="text-red-600 font14-res-300">{errorDate}</span>
    //                                             </div>
    //                                         )}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="lg:w-6/12 md:w-9/12 sm:w-10/12 mx-auto mt-3">
    //                             <div className="lg:w-10/12  w-full lg:mx-auto">
    //                                 <div className="flex justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
    //                                     <h2 className="my-3" style={{ fontSize:"20px" , color:"#8D2EF4"}} >Soal</h2>
    //                                     <p className="my-auto" style={{ fontSize:"16px" , color:"#8D2EF4"}} >1 Soal</p>
    //                                 </div>
    //                             </div>
    //                             <div>
    //                                 {props.questions.map((item , index) => {
    //                                     return (
    //                                         <div key={item.id} className="xl:w-9/12 lg:w-10/12 w-full lg:mx-auto my-4">
    //                                             <ul className="py-0">
    //                                                 {item.type === "PG" ? (
    //                                                     <div className="py-0 my-0">
    //                                                         <MakeMyTaskAssigmentPGCardComponent
    //                                                             username={username}
    //                                                             slug={slug}
    //                                                             assignmentId={id}
    //                                                             id={item.id}
    //                                                             question={item.question}
    //                                                             answer_a={item.answer_a}
    //                                                             point={item.point}
    //                                                             answer_b={item.answer_b}
    //                                                             answer_c={item.answer_c}
    //                                                             answer_d={item.answer_d}
    //                                                             onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
    //                                                         />
    //                                                     </div>
    //                                                 ) : item.type === "Essay" ? (
    //                                                     <div className="py-0 my-0">
    //                                                         <MakeMyTaskAssigmentEssayCardComponent
    //                                                             username={username}
    //                                                             slug={slug}
    //                                                             assignmentId={id}
    //                                                             id={item.id}
    //                                                             question={item.question}
    //                                                             point={item.point}
    //                                                         />
    //                                                     </div>
    //                                                 ) : item.type === "Link" ? (
    //                                                     <div className="py-0 my-0">
    //                                                         <MakeMyTaskAssigmentLinkCardComponent
    //                                                             username={username}
    //                                                             slug={slug}
    //                                                             assignmentId={id}
    //                                                             id={item.id}
    //                                                             question={item.question}
    //                                                             point={item.point}
    //                                                         />
    //                                                     </div>
    //                                                 ) : (
    //                                                     <div>
    //                                                         <h2>Sepertinya ada yang salah</h2>
    //                                                     </div>
    //                                                 )}
    //                                             </ul>
    //                                         </div>
    //                                     );
    //                                 })}
    //                             </div>
    //                             {questions.length > 0 && (
    //                                 <div className="xl:w-9/12 lg:w-10/12   w-full lg:mx-auto  my-4">
    //                                     <ul className="py-1">
    //                                         {questions.map((question, index) => {
    //                                             return(
    //                                                 <div key={index}>
    //                                                     {question.type === "" ? (
    //                                                         <li className="border-t" key={index}>
    //
    //                                                         </li>
    //                                                     ) : (
    //                                                         <li className="border-t" key={index}>
    //                                                             {/* Render the appropriate question component based on the question type */}
    //                                                             {question.type === 'PG' && (
    //                                                                 <MakeTaskAssigmentPGCardComponent
    //                                                                     onChange={onChangeType}
    //                                                                     onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
    //                                                                     funcDelete={() => handleDeleteQuestion(index)}
    //                                                                 />
    //                                                             )}
    //                                                             {question.type === 'Essay' && (
    //                                                                 <MakeTaskAssigmentEssayCardComponent
    //                                                                     onChange={onChangeType}
    //                                                                     onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
    //                                                                     funcDelete={() => handleDeleteQuestion(index)}
    //                                                                 />
    //                                                             )}
    //                                                             {question.type === 'Link' && (
    //                                                                 <MakeTaskAssigmentLinkCardComponent
    //                                                                     onChange={onChangeType}
    //                                                                     onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
    //                                                                     funcDelete={() => handleDeleteQuestion(index)}
    //                                                                 />
    //                                                             )}
    //                                                         </li>
    //                                                     )}
    //                                                 </div>
    //                                             )
    //                                         })}
    //                                     </ul>
    //                                 </div>
    //                             )}
    //                             <div className="border-t lg:w-10/12  w-full lg:mx-auto  my-5 ">
    //                                 <div className="w-full  mt-8  bg-white py-3 px-2 shadow border-radius-12">
    //                                     <div className="my-3 mx-auto w-full">
    //                                         <div className="w-full gap-3 grid grid-cols-3  mx-auto">
    //                                             <div className="relative">
    //                                                 <div className="w-10/12 mx-auto">
    //                                                     <button
    //                                                         className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"
    //                                                         style={{ width: "55px" }}
    //                                                         onClick={handleButtonPGClick}
    //                                                     >
    //                                                         <div style={{ height: "26px" }}>
    //                                                             <img className="h-full mx-auto" src="/assets/pg-icon.svg" alt="Icon" />
    //                                                         </div>
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="relative">
    //                                                 <div className="w-10/12 mx-auto">
    //                                                     <button
    //                                                         className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"
    //                                                         style={{ width: "55px" }}
    //                                                         onClick={handleButtonEssayClick}
    //                                                     >
    //                                                         <div style={{ height: "26px" }}>
    //                                                             <img className="h-full mx-auto" src="/assets/essay-icon.svg" alt="Icon" />
    //                                                         </div>
    //                                                     </button>
    //                                                 </div>
    //
    //                                             </div>
    //                                             <div className="relative">
    //                                                 <div className="w-10/12 mx-auto">
    //                                                     <button
    //                                                         className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"
    //                                                         style={{ width: "55px" }}
    //                                                         onClick={handleButtonLinkClick}
    //                                                     >
    //                                                         <div style={{ height: "26px" }}>
    //                                                             <img className="h-full mx-auto" src="/assets/link-file-icon.svg" alt="Icon" />
    //                                                         </div>
    //                                                     </button>
    //                                                 </div>
    //
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="flex w-full  lg:w-11/12  lg:mt-10 lg:mb-10 mt-14 mb-14 border-t pt-10  text-right">
    //                                 <button onSubmit={handleSubmit} className="shadow font16-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white" style={{ borderRadius: "4px" }}>
    //                                     Update Assignment
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </>
    // );

// }


// const questionsAlreadyParams = questionsAlready.length > 0
//     ? questionsAlready
//         .map(
//             (question, index) =>
//                 `&questionsAlready[${index}][question_id]=${encodeURIComponent(
//                     question.id
//                 )}&questionsAlready[${index}][question]=${encodeURIComponent(
//                     question.question
//                 )}&questionsAlready[${index}][answer_a]=${encodeURIComponent(
//                     question.answerA
//                 )}&questionsAlready[${index}][answer_b]=${encodeURIComponent(
//                     question.answerB
//                 )}&questionsAlready[${index}][answer_c]=${encodeURIComponent(
//                     question.answerC
//                 )}&questionsAlready[${index}][answer_d]=${encodeURIComponent(
//                     question.answerD
//                 )}&questionsAlready[${index}][true_answer]=${encodeURIComponent(
//                     question.true_answer
//                 )}&questionsAlready[${index}][required]=${
//                     question.required ? 1 : 0
//                 }&questionsAlready[${index}][point]=${question.point}&questionsAlready[${index}][type]=${question.type}`
//         )
//         .join('')
//     : `&question_already=${encodeURIComponent(questionsAlready)}`;
//
// const url = `http://127.0.0.1:8000/api/${username}/${slug}/update/assignment/${id}?name=${encodeURIComponent(
//     name
// )}&point=100&change=${change}&start_time=${encodeURIComponent(
//     startTime
// )}&end_time=${encodeURIComponent(endTime)}&date=${encodeURIComponent(
//     date
// )}${questions
//     .map(
//         (question, index) =>
//             `&questions[${index}][question]=${encodeURIComponent(
//                 question.question
//             )}&questions[${index}][answer_a]=${encodeURIComponent(
//                 question.answerA
//             )}&questions[${index}][answer_b]=${encodeURIComponent(
//                 question.answerB
//             )}&questions[${index}][answer_c]=${encodeURIComponent(
//                 question.answerC
//             )}&questions[${index}][answer_d]=${encodeURIComponent(
//                 question.answerD
//             )}&questions[${index}][true_answer]=${encodeURIComponent(
//                 question.true_answer
//             )}&questions[${index}][required]=${
//                 question.required ? 1 : 0
//             }&questions[${index}][point]=${question.point}&questions[${index}][type]=${question.type}`
//     )
//     .join('')}${questionsAlreadyParams}`;
