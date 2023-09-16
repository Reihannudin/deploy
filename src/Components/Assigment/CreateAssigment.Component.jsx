import React, {useEffect, useRef, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import ReactQuill from "react-quill";
import axios, {post} from "axios";
import {toast, ToastContainer} from "react-toastify";
import {MakeTaskAssigmentPGCardComponent} from "./Card/MakeTaskAssigmentPGCard.Component";
import {MakeTaskAssigmentEssayCardComponent} from "./Card/MakeTaskAssigmentEssayCard.Component";
import api from "../../Config/api";


export const CreateAssigmentComponent = ({user}) => {

    const navigate = useNavigate();
    const { id, slug } = useParams();

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

    const [searchParams] = useSearchParams();
    const [errorName, setErrorName] = useState('');
    const [errorOutApp, setErrorOutApp] = useState('');
    const [errorChange, setErrorChange] = useState('');
    const [errorStartTime, setErrorStartTime] = useState('');
    const [errorEndTime, setErrorEndTime] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [errorQuestions , setErrorQuestions] = useState([]);
    const [errorAnswerA , setErrorAnswerA] = useState('');
    const [errorAnswerB , setErrorAnswerB] = useState('');
    const [errorAnswerC , setErrorAnswerC] = useState('');
    const [errorAnswerD , setErrorAnswerD] = useState('');
    const [errorTrueAnswer , setErrorTrueAnswer] = useState('');


    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState(`/view/my/class/${slug}/${id}`);
    const [isLoading, setIsLoading] = useState(false);

    let token = localStorage.getItem('auth_token');

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    const onChangeOutApp = (event) => {
        const out_app = event.target.value;
        setOutApp(out_app);
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
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name: name,
            change: change,
            out_app: outApp,
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

        api
            .post(`/${slug}/${id}/create/assignment`, formData , {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : "Bearer " + token,
            })
            .then((response) => {
                console.log("response data" , response)
                console.log(response.data);
                console.log("its 201 :"  ,response.data.status === 201);
                console.log("response redirect"  ,response.data.redirect_path)
                setIsLoading(false); // Stop loading indicator
                if (response.data.status === 201) {
                    let redirectUrl = response.data.redirect_path;
                    setErrorName('');
                    setErrorChange('')
                    setErrorOutApp('');
                    setErrorDate('');
                    setErrorStartTime('');
                    setErrorEndTime('');
                    setErrorQuestions('');
                    setErrorAnswerA('');
                    setErrorAnswerB('');
                    setErrorAnswerC('');
                    setErrorAnswerD('');
                    setErrorTrueAnswer('');
                    setRedirectPath(redirectUrl);
                    navigate(redirectUrl);

                }
                else if (response.data.status === 406) {
                    console.log(response.data.errors.message)
                    if (response.data.errors.message === "Nama Tugas tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setRedirectPath(redirectUrl);
                        setErrorName(response.data.errors.message);
                        navigate(redirectUrl);
                    } else if (response.data.errors.message === "Isi jumlah waktu kali kesempatan pengerjaan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorOutApp(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Isi jumlah kesempatan pengerjaan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorChange(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Tolong isi waktu dimulainya pengerjaan tugas") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorStartTime(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Tolong isi waktu berakhirnya pengerjaan tugas") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorEndTime(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Isi dengan tanggal yang kamu tentukan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorDate(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Minimal Anda harus satu memiliki pertanyaan") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorDate(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.title === "Terjadi error dalam question") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorChange('');
                        setErrorOutApp('');
                        setErrorDate('');
                        setErrorStartTime('');
                        setErrorEndTime('');
                        setErrorQuestions('');
                        setErrorAnswerA('');
                        setErrorAnswerB('');
                        setErrorAnswerC('');
                        setErrorAnswerD('');
                        setErrorTrueAnswer('');
                        setErrorQuestions(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }

                }


            })
            .catch((error) => {
                // console.log("error" , error)
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorName(errors?.message?.[0] || '');
                setErrorOutApp(errors?.message?.[0] || '');
                setErrorChange(errors?.message?.[0] || '');
                setErrorStartTime(errors?.message?.[0] || '');
                setErrorEndTime(errors?.message?.[0] || '');
                setErrorDate(errors?.message?.[0] || '');
                setErrorTrueAnswer(errors?.message?.[0] || '');
            });
    };


    console.log("question : " , questions)

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
                                                Nama Tugas
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
                            {/* ================================================================*/}
                            <div className="lg:w-6/12 md:w-10/12 w-full lg:mx-auto mx-auto mt-3">
                                <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 w-full md:mx-auto">
                                    <div className="flex justify-between " style={{ borderBottom:"2px solid #A568E6"}}>
                                        <h2 className="my-3 font18-res-300" style={{ color:"#8D2EF4"}} >Soal</h2>
                                        <p className="my-auto font16-res-300" style={{  color:"#8D2EF4"}} >1 Soal</p>
                                    </div>
                                </div>

                                {questions.length > 0 && (
                                    <div className="xl:w-10/12 lg:w-11/12 md:w-9/12  w-full md:mx-auto  my-4">
                                        <ul className="py-1">
                                            {questions.map((question, index) => {
                                                return (
                                                    <div key={index}>

                                                              <div>
                                                                  {question.type === "" ? (
                                                                      <li className="border-t" key={index}></li>
                                                                  ) : (
                                                                      <li className="border-t" key={index}>
                                                                          {question.type === 'PG' && (
                                                                              <MakeTaskAssigmentPGCardComponent
                                                                                  onChange={onChangeType}
                                                                                  index={index}
                                                                                  errorQuestion={errorQuestions}
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
                                                                                  index={index}
                                                                                  errorQuestion={errorQuestions}
                                                                                  errorTrueAnswer={errorTrueAnswer}
                                                                                  onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}
                                                                                  funcDelete={() => handleDeleteQuestion(index)}
                                                                              />
                                                                          )}
                                                                          {/* Map over the error messages and render them */}
                                                                          {question.errors && question.errors.message && (
                                                                              <ul>
                                                                                  {question.errors.message.map((error, errorIndex) => (
                                                                                      <li key={errorIndex}>{error}</li>
                                                                                  ))}
                                                                              </ul>
                                                                          )}
                                                                      </li>
                                                                  )}
                                                              </div>

                                                    </div>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}

                                {/*{questions.length > 0 && (*/}
                                {/*    <div className="xl:w-10/12 lg:w-11/12 md:w-9/12  w-full md:mx-auto  my-4"  >*/}
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
                                {/*                                        errorAnswerA={errorAnswerA}*/}
                                {/*                                        errorAnswerB={errorAnswerB}*/}
                                {/*                                        errorAnswerC={errorAnswerC}*/}
                                {/*                                        errorAnswerD={errorAnswerD}*/}
                                {/*                                        errorTrueAnswer={errorTrueAnswer}*/}
                                {/*                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                {/*                                        funcDelete={() => handleDeleteQuestion(index)}*/}
                                {/*                                    />*/}
                                {/*                                )}*/}
                                {/*                                {question.type === 'Essay' && (*/}
                                {/*                                    <MakeTaskAssigmentEssayCardComponent*/}
                                {/*                                        onChange={onChangeType}*/}
                                {/*                                        errorTrueAnswer={errorTrueAnswer}*/}
                                {/*                                        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*/}
                                {/*                                        funcDelete={() => handleDeleteQuestion(index)}*/}
                                {/*                                    />*/}
                                {/*                                )}*/}
                                {/*                                /!*{question.type === 'Link' && (*!/*/}
                                {/*                                /!*    <MakeTaskAssigmentLinkCardComponent*!/*/}
                                {/*                                /!*        onChange={onChangeType}*!/*/}
                                {/*                                /!*        errorTrueAnswer={errorTrueAnswer}*!/*/}
                                {/*                                /!*        onQuestionChange={(updatedQuestion) => handleQuestionChange(index, updatedQuestion)}*!/*/}
                                {/*                                /!*        funcDelete={() => handleDeleteQuestion(index)}*!/*/}
                                {/*                                /!*    />*!/*/}
                                {/*                                /!*)}*!/*/}
                                {/*                            </li>*/}
                                {/*                        )}*/}
                                {/*                    </div>*/}
                                {/*                )*/}
                                {/*            })}*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*)}*/}
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
                                </form>
                                </div>
                        </div>
                </div>
            </div>
        </>
    );

}



