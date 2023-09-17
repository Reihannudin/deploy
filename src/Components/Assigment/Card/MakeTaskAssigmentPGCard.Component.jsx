import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";

export const MakeTaskAssigmentPGCardComponent = (props) => {
    const [text, setText] = useState("isi dengan soal mu");
    const [point, setPoint] = useState(1);
    const [answers, setAnswers] = useState({
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
    });


    const [trueAnswer, setTrueAnswer] = useState('');

    const [isTextHidden, setIsTextHidden] = useState(true);

    const handleTextChange = (value) => {
        setText(value);
        props.onQuestionChange({ question: value });
    };

    const handleAnswerChange = (event, key) => {
        const value = event.target.value.trim(); // Trim the input value
        // Validate if the value is empty
        if (value === "") {
            event.target.setCustomValidity("This field is required.");
        } else {
            event.target.setCustomValidity("");
        }

        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [key]: value,
        }));
        props.onQuestionChange({ [key]: value });
    };

    // const handleAnswerChange = (event) => {
    //     const value = event.target.value;
    //     setAnswer(value);
    //     props.onQuestionChange({ trueAnswer: value });
    // };
    const handleTrueAnswerChange = (key) => {
        setTrueAnswer(key);
        props.onQuestionChange({ trueAnswer: answers[key] });
    };

    const handlePointChange = (event) => {
        const value = parseInt(event.target.value);
        setPoint(value);
        props.onQuestionChange({ point: value });
    };

    const [isRequired, setIsRequired] = useState(0);
    const clickRequired = () => {
        setIsRequired(isRequired === 0 ? 1 : 0);
        props.onQuestionChange({ required: isRequired });
    };


    const toggleIsTextHidden = () => {
        setIsTextHidden((prevHidden) => !prevHidden);
    };

    const [errorQuestion, setErrorQuestion] = useState([]);

    // Use useEffect to update the errorQuestion state when props.errorQuestion changes
    useEffect(() => {
        setErrorQuestion(props.errorQuestion);
    }, [props.errorQuestion]);

    console.log("props.errorQuestion" , errorQuestion);
    console.log("props.errorQuestion" , props.index);
    console.log("props.errorQuestion" , props.errorQuestion.index);

    return (
        <>

            <div className="shadow my-6 bg-white unselectable py-2 px-3" style={{ borderRadius:"4px"}}>
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
                                    <input className="font14-res-300 text-center w-full"  type="number" disabled placeholder="3 menit"  style={{  fontWeight: "500" }} />
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
                    <ul className="text-gray-500">
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === 'answerA'}
                                        onChange={() => handleTrueAnswerChange('answerA')}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Tuliskan jawaban untuk soal"
                                        // value={answers.answerA}
                                        required
                                        onChange={(event) => handleAnswerChange(event, 'answerA')}
                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />

                                </div>
                                {errorQuestion.map(( itemError , index) => {
                                    console.log("same index?" , index ===  props.index)
                                    console.log("item error?" , index)
                                    console.log("item error?" , itemError)
                                    console.log("erro answer a ?" , itemError.error.answer_a)
                                    return(
                                        <>
                                            {itemError && index ===  props.index ? (
                                                <div className="mt-0.5 mx-7 border-t text-left">
                                                    <span className="text-red-600 font14-res-300">{itemError.error.answer_a}</span>
                                                </div>
                                            ):(
                                                <></>
                                            )}
                                        </>
                                    )
                                })}

                            </label>
                        </li>
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === 'answerB'}
                                        onChange={() => handleTrueAnswerChange('answerB')}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Tuliskan jawaban untuk soal"
                                        // value={answers.answerB}
                                        required
                                        onChange={(event) => handleAnswerChange(event, 'answerB')}
                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                                {errorQuestion.map(( itemError , index) => {
                                    console.log("same index?" , index ===  props.index)
                                    console.log("item error?" , index)
                                    console.log("item error?" , itemError)
                                    console.log("erro answer b ?" , itemError.error.answer_b)
                                    return(
                                        <>
                                            {itemError && index ===  props.index ? (
                                                <div className="mt-0.5 mx-7 border-t text-left">
                                                    <span className="text-red-600 font14-res-300">{itemError.error.answer_b}</span>
                                                </div>
                                            ):(
                                                <></>
                                            )}
                                        </>
                                    )
                                })}

                            </label>
                        </li>
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === 'answerC'}
                                        onChange={() => handleTrueAnswerChange('answerC')}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Tuliskan jawaban untuk soal"
                                        // value={answers.answerC}
                                        required
                                        onChange={(event) => handleAnswerChange(event, 'answerC')}
                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                                {errorQuestion.map(( itemError , index) => {
                                    console.log("same index?" , index ===  props.index)
                                    console.log("item error?" , index)
                                    console.log("item error?" , itemError)
                                    console.log("erro answer c ?" , itemError.error.answer_c)
                                    return(
                                        <>
                                            {itemError && index ===  props.index ? (
                                                <div className="mt-0.5 mx-7 border-t text-left">
                                                    <span className="text-red-600 font14-res-300">{itemError.error.answer_c}</span>
                                                </div>
                                            ):(
                                                <></>
                                            )}
                                        </>
                                    )
                                })}

                            </label>
                        </li>
                        <li className="my-4">
                            <label className="big-radio">
                                <div className="flex gap-1">
                                    <input
                                        className="my-auto font14-res-300 cursor-pointer"
                                        type="radio"
                                        checked={trueAnswer === 'answerD'}
                                        onChange={() => handleTrueAnswerChange('answerD')}
                                    />
                                    <input
                                        placeholder="Tuliskan jawaban untuk soal"
                                        // value={answers.answerD}
                                        required
                                        onChange={(event) => handleAnswerChange(event, 'answerD')}
                                        className="w-full font16-res-300 py-2 text-gray-500"
                                    />
                                </div>
                                {errorQuestion.map(( itemError , index) => {
                                    console.log("same index?" , index ===  props.index)
                                    console.log("item error?" , index)
                                    console.log("item error?" , itemError)
                                    console.log("error answer d ?" , itemError.error.answer_d)
                                    return(
                                        <>
                                            {itemError && index ===  props.index ? (
                                                <div className="mt-0.5 mx-7 border-t text-left">
                                                    <span className="text-red-600 font14-res-300">{itemError.error.answer_d}</span>
                                                </div>
                                            ):(
                                                <></>
                                            )}
                                        </>
                                    )
                                })}

                            </label>
                        </li>
                    </ul>
                    <div>
                        {errorQuestion.map(( itemError , index) => {
                            console.log("same index?" , index ===  props.index)
                            console.log("item error?" , index)
                            console.log("item error?" , itemError)
                            console.log("error true answer ?" , itemError.error.true_answer)
                            return(
                                <>
                                    {itemError && index ===  props.index ? (
                                        <div className="mt-0 text-left">
                                            <span className="text-red-600 font14-res-300">{itemError.error.true_answer}</span>
                                        </div>
                                    ):(
                                        <></>
                                    )}
                                </>
                            )
                        })}
                    </div>
                    <div className="w-full mt-6 mb-3">
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
                    <button type="submit" disabled className="hidden">Submit</button>
                </div>
            </div>

        </>
    );
};
