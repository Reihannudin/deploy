import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReactQuill from "react-quill";
import axios, {post} from "axios";
import {toast, ToastContainer} from "react-toastify";
import {MakeTaskAssigmentPGCardComponent} from "./Card/MakeTaskAssigmentPGCard.Component";
import {MakeTaskAssigmentEssayCardComponent} from "./Card/MakeTaskAssigmentEssayCard.Component";


export const CreateAssigmentComponent = () => {

    const navigate = useNavigate();
    const { id, slug } = useParams();

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const username = user.username;

    const [name, setName] = useState('');
    const [change, setChange] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [date, setDate] = useState('');

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const onChangeChange = (event) => {
        const change = event.target.value;
        setChange(change);
    };

    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime);
    };

    const onChangeEndTime = (event) => {
        const endTime = event.target.value;
        setEndTime(endTime);
    };

    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date);
    };

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

    console.log(questions);

    const [searchParams] = useSearchParams();
    const [errorName, setErrorName] = useState('');
    const [errorChange, setErrorChange] = useState('');
    const [errorStartTime, setErrorStartTime] = useState('');
    const [errorEndTime, setErrorEndTime] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [errorQuestions , setErrorQuestions] = useState('');
    const [errorAnswerA , setErrorAnswerA] = useState('');
    const [errorAnswerB , setErrorAnswerB] = useState('');
    const [errorAnswerC , setErrorAnswerC] = useState('');
    const [errorAnswerD , setErrorAnswerD] = useState('');
    const [errorTrueAnswer , setErrorTrueAnswer] = useState('');

    useEffect(() => {
        setErrorName(searchParams.get('error_name') || '');
        setErrorChange(searchParams.get('error_change') || '');
        setErrorStartTime(searchParams.get('error_start_time') || '');
        setErrorEndTime(searchParams.get('error_end_time') || '');
        setErrorDate(searchParams.get('error_date') || '');
        setErrorAnswerA(searchParams.get('error_answer_a') || '');
        setErrorAnswerB(searchParams.get('error_answer_b') || '');
        setErrorAnswerC(searchParams.get('error_answer_c') || '');
        setErrorAnswerD(searchParams.get('error_answer_d') || '');
        setErrorTrueAnswer(searchParams.get('error_true_answer') || '');
        setErrorQuestions(searchParams.get('error_questions') || '');

        setName(searchParams.get('name') || '');
        setChange(searchParams.get('change') || '');
        setStartTime(searchParams.get('start_time') || '');
        setEndTime(searchParams.get('end_time') || '');
        setDate(searchParams.get('date') || '');
    }, [searchParams]);

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
        };
        console.log(formData)

        axios
            // .post(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/${id}/create/assignment`, formData)
            .post(`http://127.0.0.1:8000/api/${username}/${slug}/${id}/create/assignment`, formData)
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);
            })
            .catch((error) => {
                console.error(error.response); // Log the error response
                const { errors } = error.response.data;

                setErrorName(errors?.name?.[0] || '');
                setErrorChange(errors?.change?.[0] || '');
                setErrorStartTime(errors?.start_time?.[0] || '');
                setErrorEndTime(errors?.end_time?.[0] || '');
                setErrorDate(errors?.date?.[0] || '');
                setErrorTrueAnswer(errors?.true_answer?.[0] || '');
            });
    };

    useEffect(() => {
        if (redirectUrl) {
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            setErrorName(searchParams.get('error_name') || '');
            setErrorChange(searchParams.get('error_change') || '');
            setErrorStartTime(searchParams.get('error_start_time') || '');
            setErrorEndTime(searchParams.get('error_end_time') || '');
            setErrorDate(searchParams.get('error_date') || '');
            setErrorTrueAnswer(searchParams.get('error_true_answer') || '');
            setErrorAnswerA(searchParams.get('error_answer_a') || '');
            setErrorAnswerB(searchParams.get('error_answer_b') || '');
            setErrorAnswerC(searchParams.get('error_answer_c') || '');
            setErrorAnswerD(searchParams.get('error_answer_d') || '');

            setErrorQuestions(searchParams.get('error_questions') || '');

            setName(searchParams.get('name') || '');
            setChange(searchParams.get('change') || '');
            setStartTime(searchParams.get('start_time') || '');
            setEndTime(searchParams.get('end_time') || '');
            setDate(searchParams.get('date') || '');

            searchParams.delete('error_name');
            searchParams.delete('error_date');
            searchParams.delete('error_start_time');
            searchParams.delete('error_true_answer');
            searchParams.delete('error_answer_a');
            searchParams.delete('error_answer_b');
            searchParams.delete('error_answer_c');
            searchParams.delete('error_answer_d');

            url.search = searchParams.toString();
            window.history.replaceState({}, '', url.href);

            const statusParam = searchParams.get('status');

            if (statusParam === '201') {
                navigate(`/view/my/class/${id}/${slug}`);
            }

            setRedirectUrl('');
        }
    }, [redirectUrl]);

    const handleAlertErrorQuestion = () => {
        alert('Pastikan anda memiliki minimal satu pertanyaan');
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete('error_questions');
        window.history.replaceState(null, '', `${window.location.pathname}?${searchParams}`);
    };

    const currentURL = window.location.href;
    const requestStillInURL = currentURL.includes('error_questions');

    console.log(startTime);
    console.log(endTime);

    return (
        <>
            {requestStillInURL && (
                <div>
                    {handleAlertErrorQuestion()}
                </div>
            )}
            <div className="h-full mx-auto md:pt-16 pt-14 px-0" style={{ minWidth: "300px" }}>
                <div className="lg:flex xl:w-9/12 md:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                    <div className="w-full block lg:flex lg:justify-between">
                            <div className="lg:w-6/12 md:w-11/12 w-full mx-auto mt-3">
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
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
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
                                                    onChange={onChangeChange}
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
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
                                                            onChange={onChangeStartTime}
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

                                        <div className="mt-2 sm:w-6/12 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: "#777575" }}>
                                                Date
                                            </label>
                                            <div className="flex md:w-11/12 w-full">
                                                <input
                                                    id="subject"
                                                    type="date"
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
                                    <div className="flex justify-between " style={{ borderBottom:"2px solid #A568E6"}}>
                                        <h2 className="my-3 font18-res-300" style={{ color:"#8D2EF4"}} >Soal</h2>
                                        <p className="my-auto font16-res-300" style={{  color:"#8D2EF4"}} >1 Soal</p>
                                    </div>
                                </div>

                                {questions.length > 0 && (
                                    <div className="xl:w-10/12 lg:w-11/12 md:w-9/12  w-full md:mx-auto  my-4"  >
                                        <ul className="py-1">
                                            {questions.map((question, index) => {
                                                return(
                                                    <div key={index}>
                                                        {question.type === "" ? (
                                                            <li className="border-t" key={index}>

                                                            </li>
                                                        ) : (
                                                            <li className="border-t" key={index}>
                                                                {/* Render the appropriate question component based on the question type */}
                                                                {question.type === 'PG' && (
                                                                    <MakeTaskAssigmentPGCardComponent
                                                                        onChange={onChangeType}
                                                                        errorAnswerA={errorAnswerA}
                                                                        errorAnswerB={errorAnswerB}
                                                                        errorAnswerC={errorAnswerC}
                                                                        errorAnswerD={errorAnswerD}
                                                                        errorTrueAnswer={errorTrueAnswer}
                                                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                        funcDelete={() => handleDeleteQuestion(index)}
                                                                    />
                                                                )}
                                                                {question.type === 'Essay' && (
                                                                    <MakeTaskAssigmentEssayCardComponent
                                                                        onChange={onChangeType}
                                                                        errorTrueAnswer={errorTrueAnswer}
                                                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                        funcDelete={() => handleDeleteQuestion(index)}
                                                                    />
                                                                )}
                                                                {/*{question.type === 'Link' && (*/}
                                                                {/*    <MakeTaskAssigmentLinkCardComponent*/}
                                                                {/*        onChange={onChangeType}*/}
                                                                {/*        errorTrueAnswer={errorTrueAnswer}*/}
                                                                {/*        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                                                {/*        funcDelete={() => handleDeleteQuestion(index)}*/}
                                                                {/*    />*/}
                                                                {/*)}*/}
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
                                <form onSubmit={handleSubmit} className="w-full">

                                    <div className="flex xl:w-10/12 lg:w-11/12 mx-auto  w-full justify-between md:mt-20 mt-36 text-right">
                                        <div>

                                        </div>
                                        <button onSubmit={handleSubmit} type="submit" className="shadow font15-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white" style={{ borderRadius: "4px" }}>
                                            Buat Assignment
                                        </button>
                                    </div>
                                    {/*<div className="flex w-full lg:mt-10 lg:mb-10 mt-10 mb-0 border-t pt-10 text-right">*/}
                                    {/*    /!*<a*!/*/}
                                    {/*    /!*    className="ms-auto"*!/*/}
                                    {/*    /!*    href={`http://127.0.0.1:8000/api/${username}/${slug}/create/assignment?name=${encodeURIComponent(name)}&point=100&change=${change}&start_time=${encodeURIComponent(startTime)}&end_time=${encodeURIComponent(endTime)}&date=${encodeURIComponent(date)}${questions.map((question, index) =>*!/*/}
                                    {/*    /!*        `&questions[${index}][question]=${encodeURIComponent(question.question)}&questions[${index}][answer_a]=${encodeURIComponent(question.answerA)}&questions[${index}][answer_b]=${encodeURIComponent(question.answerB)}&questions[${index}][answer_c]=${encodeURIComponent(question.answerC)}&questions[${index}][answer_d]=${encodeURIComponent(question.answerD)}&questions[${index}][true_answer]=${encodeURIComponent(question.true_answer)}&questions[${index}][required]=${question.required ? 1 : 0}&questions[${index}][point]=${question.point}&questions[${index}][type]=${question.type}`*!/*/}
                                    {/*    /!*    ).join('')}`}*!/*/}
                                    {/*    /!*>*!/*/}
                                    {/*    <button onSubmit={handleSubmit} type="submit" className="shadow font15-res-300 weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white" style={{ borderRadius: "4px" }}>*/}
                                    {/*        Buat Assignment*/}
                                    {/*    </button>*/}
                                    {/*    /!*</a>*!/*/}
                                    {/*</div>*/}

                                </form>
                                </div>
                        </div>
                </div>
            </div>
        </>
    );

}

