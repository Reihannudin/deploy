import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {MakeTaskAssigmentPGCardComponent} from "./Card/MakeTaskAssigmentPGCard.Component";
import {MakeTaskAssigmentEssayCardComponent} from "./Card/MakeTaskAssigmentEssayCard.Component";
import {MakeTaskAssigmentLinkCardComponent} from "./Card/MakeTaskAssigmentLinkCard.Component";
import {MakeMyTaskAssigmentPGCardComponent} from "./Card/MakeMyTaskAssigmentPGCard.Component";
import {MakeMyTaskAssigmentEssayCardComponent} from "./Card/MakeMyTaskAssigmentEssayCard.Component";
import {MakeMyTaskAssigmentLinkCardComponent} from "./Card/MakeMyTaskAssigmentLinkCard.Component";

export const EditAssignmentComponent= (props) => {

    const { id, slug , class_id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [outApp, setOutApp] = useState('');
    const [change, setChange] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState('');
    const [inputQuestionPoint, setInputQuestionPoint] = useState(1);
    const [inputQuestionAnswerA, setInputQuestionAnswerA] = useState('');
    const [inputQuestionAnswerB, setInputQuestionAnswerB] = useState('');
    const [inputQuestionAnswerC, setInputQuestionAnswerC] = useState('');
    const [inputQuestionAnswerD, setInputQuestionAnswerD] = useState('');
    const [inputQuestionTrueAnswer, setInputQuestionTrueAnswer] = useState('');
    const [inputQuestionType, setInputQuestionType] = useState('');
    const [isRequired, setIsRequired] = useState(0);

    const [searchParams ] = useSearchParams();
    const [errorName , setErrorName] = useState('');
    const [errorChange , setErrorChange] = useState('');
    const [errorOutApp, setErrorOutApp] = useState('');
    const [errorStartTime , setErrorStartTime] = useState('');
    const [errorEndTime , setErrorEndTime] = useState('');
    const [errorDate , setErrorDate] = useState('');
    const [errorQuestions , setErrorQuestions] = useState([]);

    useEffect(() => {
        setName(props.name);
    } , [props.name])
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    useEffect(() => {
        setChange(props.change);
    } , [props.change])
    const onChangeChange = (event) => {
        const change = event.target.value;
        setChange(change);
    };

    useEffect(() => {
        setOutApp(props.out_app);
    } , [props.out_app])
    const onChangeOutApp = (event) => {
        const outApp = event.target.value;
        setOutApp(outApp);
    };

    useEffect(() => {
        setDate(props.date);
    } , [props.date])
    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    };

    useEffect(() => {
        setStartTime(props.start_time);
    } , [props.start_time])
    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime);
    };

    useEffect(() => {
        setEndTime(props.end_time);
    } , [props.end_time])
    const onChangeEndTime = (event) => {
        const endTimeValue = event.target.value;
        setEndTime(endTimeValue);
    };

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

    console.log("question" , props.questions)

    const [previousQuestion, setPreviousQuestion] = useState([]);
    const [questionsAlready, setQuestionsAlready] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/my/assignment/${id}/question`);
                const response = await axios.get(`http://127.0.0.1:8000/api/${slug}/my/assignment/${id}/question`);
                const data = response.data;
                setPreviousQuestion(data);
                setQuestionsAlready(data); // Set questionsAlready with the fetched data
            } catch (error) {
                console.log("Error Fetching Resource Data", error);
            }
        };
        fetchData();
    }, []);

    const handleQuestionsAlreadyChange = (index, updateQuestionAlready) => {
        setQuestionsAlready((prevQuestionAlready) => {
            const updatedQuestionsAlready = [...prevQuestionAlready];
            updatedQuestionsAlready[index] = {
                ...updatedQuestionsAlready[index],
                ...updateQuestionAlready,
            };
            return updatedQuestionsAlready;
        });
    };
    console.log(questionsAlready);



    const handleDeleteQuestion = (index) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions.splice(index, 1);
            return updatedQuestions;
        });
    };

    const handleQuestionChange = (index, updatedQuestion) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[index] = { ...updatedQuestions[index], ...updatedQuestion };
            return updatedQuestions;
        });
    };

    const handleButtonPGClick = () => {
        const newQuestion = {
            question: question,
            point: inputQuestionPoint,
            answerA: inputQuestionAnswerA,
            answerB: inputQuestionAnswerB,
            answerC: inputQuestionAnswerC,
            answerD: inputQuestionAnswerD,
            trueAnswer: inputQuestionTrueAnswer,
            type:  'PG',
            required: isRequired,
        };

        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

        setQuestion(''); // Clear the question state
        setInputQuestionPoint(1);
        setInputQuestionAnswerA('');
        setInputQuestionAnswerB('');
        setInputQuestionAnswerC('');
        setInputQuestionAnswerD('');
        setInputQuestionTrueAnswer('');
        setInputQuestionType('');
        setIsRequired(0);
    };

    const handleButtonEssayClick = () => {
        const newQuestion = {
            question: question,
            point: inputQuestionPoint,
            answerA: inputQuestionAnswerA,
            answerB: inputQuestionAnswerB,
            answerC: inputQuestionAnswerC,
            answerD: inputQuestionAnswerD,
            trueAnswer: inputQuestionTrueAnswer,
            type: 'Essay',
            required: isRequired,
        };

        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

        setQuestion(''); // Clear the question state
        setInputQuestionPoint(1);
        setInputQuestionAnswerA('');
        setInputQuestionAnswerB('');
        setInputQuestionAnswerC('');
        setInputQuestionAnswerD('');
        setInputQuestionTrueAnswer('');
        setInputQuestionType('');
        setIsRequired(0);
    };

    const handleButtonLinkClick = () => {
        const newQuestion = {
            question: question,
            point: inputQuestionPoint,
            answerA: inputQuestionAnswerA,
            answerB: inputQuestionAnswerB,
            answerC: inputQuestionAnswerC,
            answerD: inputQuestionAnswerD,
            trueAnswer: inputQuestionTrueAnswer,
            type: 'Link',
            required: isRequired,
        };

        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

        setQuestion(''); // Clear the question state
        setInputQuestionPoint(1);
        setInputQuestionAnswerA('');
        setInputQuestionAnswerB('');
        setInputQuestionAnswerC('');
        setInputQuestionAnswerD('');
        setInputQuestionTrueAnswer('');
        setInputQuestionType('');
        setIsRequired(0);
    };

    const onChangeType = () => {
        setInputQuestionType(''); // Set inputQuestionType to an empty string
    };

    const [redirectUrl, setRedirectUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            change: change,
            start_time: startTime,
            end_time: endTime,
            date: date,
            questions: questions.map((q) => ({
                question: q.question,
                point: q.point,
                answer_a: q.answerA,
                answer_b: q.answerB,
                answer_c: q.answerC,
                answer_d: q.answerD,
                true_answer: q.trueAnswer,
                type: q.type,
                required: q.required,
            })),
            questions_already: questionsAlready.map((qa) => ({
                question_id: qa.id,
                question: qa.question,
                point: qa.point,
                answer_a: qa.answerA,
                answer_b: qa.answerB,
                answer_c: qa.answerC,
                answer_d: qa.answerD,
                true_answer: qa.trueAnswer,
                type: qa.type,
                required: qa.required,
            })),
        };

        console.log(formData);

        axios
            // .put(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/${class_id}/update/assignment/${id}`, formData)
            .put(`http://127.0.0.1:8000/api//${slug}/${class_id}/update/assignment/${id}`, formData)
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.error(error.response); // Log the error response
                if (error.response && error.response.data && error.response.data.error) {
                    const { errors } = error.response.data.error;
                    console.log(errors); // Log the validation errors
                }
            });
    };

    console.log(questionsAlready)

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            url.search = searchParams.toString();
            window.history.replaceState({}, '', url.href);

            const statusParam = searchParams.get('status');

            if (statusParam === '201') {
                navigate(`/view/my/class/${id}/${slug}`);
            }

            setRedirectUrl('');
        }
    }, [redirectUrl]);


    const currentURL = window.location.href;

    console.log(name);
    console.log(change);
    console.log(startTime);
    console.log(endTime);
    console.log(date);
    console.log(questionsAlready);
    console.log(questions);

    return(
        <>
            <div className="h-full mx-auto md:pt-20 pt-16 px-0" style={{ minWidth: "300px" }}>
                <div className="w-full py-2 bg-gray-50" >
                    <div className="md:w-9/12 w-10/12 text-left mx-auto" style={{ color: "#575757" }}>
                        <h1 className="font16-res-300" style={{ fontWeight: "500" }}>Perhatian</h1>
                        <p className="font14-res-300">Anda hanya bisa mengedit assignment jikalau assignment belum dimulai</p>
                    </div>
                </div>
                <div className="lg:flex lg:w-9/12 md:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                        <div className="w-full block lg:flex lg:justify-between">
                            <div className="lg:w-6/12 md:w-11/12 sm:w-11/12 w-full mx-auto mt-3">
                                <div className="flex w-full text-left">
                                    <div className="md:flex block w-full text-left">
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Nama Tugas
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="class"
                                                    type="text"
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    onChange={onChangeName}
                                                    value={name}
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
                                    </div>
                                </div>
                                <div className="flex w-full text-left">
                                    <div className="md:flex block w-full text-left">
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Kesempatan keluar
                                            </label>
                                            <div className="flex md:w-10/12 w-full">
                                                <input
                                                    id="class"
                                                    type="number"
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    onChange={onChangeOutApp}
                                                    value={outApp}
                                                    placeholder="Kesempatan keluar"
                                                />
                                            </div>
                                            {errorOutApp === '' ? (
                                                <div className="my-1"></div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className="text-red-600 font14-res-300">{errorOutApp}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Banyak durasi pengerjaan
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="work_change"
                                                    type="number"
                                                    value={change}
                                                    onChange={onChangeChange}
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                    style={{ borderBottom: "1px solid #ebebeb" }}
                                                    placeholder="Durasi pengerjaan"
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

                                <div className="text-left sm:w-full w-full my-3">
                                    <label className="font14-res-300" style={{ color: "#777575" }}>
                                        Rentan Waktu
                                    </label>
                                    <div className="flex w-full mb-6 mt-1 justify-between">
                                        <div className="mt-0 w-6/12 justify-between mx-auto">
                                            <div className="flex">
                                                <input
                                                    id="starttime"
                                                    type="time"
                                                    onChange={onChangeStartTime}
                                                    value={startTime}
                                                    className="w-11/12  py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
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
                                                    onChange={onChangeEndTime}
                                                    value={endTime}
                                                    className="w-11/12 py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
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
                                <div className="flex w-full text-left">
                                    <div className="sm:flex block w-full text-left">
                                        {/*<div className="mt-2 sm:w-6/12 w-full mx-auto">*/}
                                        {/*    <label className="font14-res-300" style={{ color: "#777575" }}>*/}
                                        {/*        Date*/}
                                        {/*    </label>*/}
                                        {/*    <div className="flex md:w-11/12 w-full">*/}
                                        {/*        <input*/}
                                        {/*            id="subject"*/}
                                        {/*            type="date"*/}
                                        {/*            onChange={onChangeDate}*/}
                                        {/*            className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"*/}
                                        {/*            style={{ borderBottom: "1px solid #ebebeb" }}*/}
                                        {/*            placeholder="Date"*/}
                                        {/*        />*/}
                                        {/*    </div>*/}
                                        {/*    {errorDate === '' ? (*/}
                                        {/*        <div className="my-1"></div>*/}
                                        {/*    ) : (*/}
                                        {/*        <div className="my-1 text-left">*/}
                                        {/*            <span className="text-red-600 font14-res-300">{errorDate}</span>*/}
                                        {/*        </div>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}

                                        <div className="mt-2  w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Tanggal
                                            </label>
                                            <div className="flex md:w-8/12 w-full font15-res-300 ">
                                                <input
                                                    id="subject"
                                                    type="date"
                                                    value={date}
                                                    onChange={onChangeDate}
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
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
                            <div className="lg:w-6/12 md:w-10/12 w-full lg:mx-auto mx-auto mt-3">
                                <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 w-full md:mx-auto">
                                    <div className="flex justify-between" style={{ borderBottom:"2px solid#A568E6"}}>
                                        <h2 className="my-3 font18-res-300" style={{ color:"#8D2EF4"}} >Soal</h2>
                                        <p className="my-auto font16-res-300" style={{  color:"#8D2EF4"}} >1 Soal</p>
                                    </div>
                                </div>
                                <div>
                                    {previousQuestion.map((item , index) => {
                                        return (
                                            <div key={item.id} className="xl:w-9/12 lg:w-10/12 w-full lg:mx-auto my-4">
                                                <ul className="py-0" >
                                                    {item.type === "PG" ? (
                                                        <div className="py-0 my-0">
                                                            <MakeMyTaskAssigmentPGCardComponent
                                                                onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
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
                                                                onChange={onChangeType}
                                                            />
                                                        </div>
                                                    ) : item.type === "Essay" ? (
                                                        <div className="py-0 my-0">
                                                            <MakeMyTaskAssigmentEssayCardComponent
                                                                slug={slug}
                                                                assignment_id={id}
                                                                id={item.id}
                                                                class_id={class_id}
                                                                required={item.required}
                                                                true_answer={item.true_answer}
                                                                question={item.question}
                                                                point={item.point}
                                                                onChange={onChangeType}
                                                                onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}
                                                            />
                                                        </div>
                                                    ):(
                                                        <div>
                                                            <h2>Sepertinya ada yang salah</h2>
                                                        </div>
                                                    )}
                                                    {/*: item.type === "Link" ? (*/}
                                                    {/*<div className="py-0 my-0">*/}
                                                    {/*    <MakeMyTaskAssigmentLinkCardComponent*/}
                                                    {/*        username={username}*/}
                                                    {/*        slug={slug}*/}
                                                    {/*        class_id={class_id}*/}
                                                    {/*        assignment_id={id}*/}
                                                    {/*        id={item.id}*/}
                                                    {/*        question={item.question}*/}
                                                    {/*        point={item.point}*/}
                                                    {/*        true_answer={item.true_answer}*/}
                                                    {/*        onChange={onChangeType}*/}
                                                    {/*        onQuestionChange={(updateQuestionAlready) => handleQuestionsAlreadyChange(index, updateQuestionAlready)}*/}
                                                    {/*    />*/}
                                                    {/*</div>*/}
                                                    {/*) :*/}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                                {questions.length > 0 && (
                                    <div className="xl:w-9/12 lg:w-10/12   w-full lg:mx-auto  my-4">
                                        <ul className="py-1">
                                            {questions.map((question, index) => {
                                                return(
                                                    <div key={index}>
                                                        {question.type === "" ? (
                                                            <li className="border-t" key={index}>

                                                            </li>
                                                        ) : (
                                                            <li className="border-t" key={index}  >
                                                                {/* Render the appropriate question component based on the question type */}
                                                                {question.type === 'PG' && (
                                                                    <MakeTaskAssigmentPGCardComponent
                                                                        onChange={onChangeType}
                                                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                        funcDelete={() => handleDeleteQuestion(index)}
                                                                    />
                                                                )}
                                                                {question.type === 'Essay' && (
                                                                    <MakeTaskAssigmentEssayCardComponent
                                                                        onChange={onChangeType}
                                                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                        funcDelete={() => handleDeleteQuestion(index)}
                                                                    />
                                                                )}
                                                                {question.type === 'Link' && (
                                                                    <MakeTaskAssigmentLinkCardComponent
                                                                        onChange={onChangeType}
                                                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                        funcDelete={() => handleDeleteQuestion(index)}
                                                                    />
                                                                )}
                                                            </li>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )}
                                <div className="border-t xl:w-10/12 lg:w-11/12 md:w-9/12 mx-auto  w-full lg:mx-auto  lg:my-5 mb-2 mt-4">
                                    <div className="w-full  lg:mt-8 mt-4  bg-white py-3 px-2 shadow border-radius-12">
                                        <div className="my-3 mx-auto w-full">
                                            <div className="w-10/12 gap-3 grid grid-cols-2  mx-auto">
                                                <div className="relative">
                                                    <div className="w-10/12 mx-auto">
                                                        <button
                                                            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"
                                                            style={{ width: "55px" }}
                                                            onClick={handleButtonPGClick}
                                                        >
                                                            <div style={{ height: "26px" }}>
                                                                <img className="h-full mx-auto" src="/assets/pg-icon.svg" alt="Icon" />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <div className="w-10/12 mx-auto">
                                                        <button
                                                            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"
                                                            style={{ width: "55px" }}
                                                            onClick={handleButtonEssayClick}
                                                        >
                                                            <div style={{ height: "26px" }}>
                                                                <img className="h-full mx-auto" src="/assets/essay-icon.svg" alt="Icon" />
                                                            </div>
                                                        </button>
                                                    </div>

                                                </div>
                                                {/*<div className="relative">*/}
                                                {/*    <div className="w-10/12 mx-auto">*/}
                                                {/*        <button*/}
                                                {/*            className="bg-gray-50 mx-auto hover:bg-gray-100 py-3 my-1 rounded-full"*/}
                                                {/*            style={{ width: "55px" }}*/}
                                                {/*            onClick={handleButtonLinkClick}*/}
                                                {/*        >*/}
                                                {/*            <div style={{ height: "26px" }}>*/}
                                                {/*                <img className="h-full mx-auto" src="/assets/link-file-icon.svg" alt="Icon" />*/}
                                                {/*            </div>*/}
                                                {/*        </button>*/}
                                                {/*    </div>*/}

                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form  onSubmit={handleSubmit}>
                                    <div className="flex xl:w-10/12 lg:w-11/12 mx-auto  w-full justify-between md:mt-20 mt-36 text-right">
                                        <div>

                                        </div>
                                        <button  className="shadow font16-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white" style={{ borderRadius: "4px" }}>
                                            Update Assignment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}