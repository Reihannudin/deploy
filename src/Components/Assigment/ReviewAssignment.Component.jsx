import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const ReviewAssignmentComponent = (props) => {

    const { slug , class_id, id } = useParams();

    const user = props.user

    const navigate = useNavigate();

    const [prevAnswer, setPrevAnswer] = useState([]);

    useEffect(() => {
        const getPrevAnswer = () => {
            try {
                const answerDataFromLocalStorage = localStorage.getItem(`answerAssignmentData_${id}`);
                if (answerDataFromLocalStorage) {
                    setPrevAnswer(JSON.parse(answerDataFromLocalStorage));
                }
            } catch (error) {
                console.log("Error Fetching Assignment Data:", error);
            }
        };

        getPrevAnswer();
    }, []);

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

    const [redirectUrl, setRedirectUrl] = useState('');

    const [error , setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            answers : prevAnswer.map((a) => ({
                answer : a.answer,
                question_id: a.question_id,
                action_assignment_id : a.action_assignment_id,
                type : a.type,
            })),
            time : currentTime,
            long_time : currentTime,
        };
        console.log(formData)

        axios
            // .post(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/assignment/${id}/action/${action}/send` , formData)
            .post(`http://127.0.0.1:8000/api/${slug}/assignment/${id}/action//send` , formData)
            .then((response) => {
                console.log(response.data);
                const { redirectUrl } = response.data;
                setRedirectUrl(redirectUrl);

                // Delete local storage
                localStorage.removeItem("answerAssignmentData");
                localStorage.removeItem("assignmentData");
            })
            .catch((error) => {
                console.error(error.response); // Log the error response
                const { errors } = error.response.data;

                setError(errors?.answers?.[0] || '');
            }
        );
    }

    useEffect(() => {
        if (redirectUrl){
            const url = new URL(redirectUrl);
            const searchParams = new URLSearchParams(url.search);

            setError(searchParams.get('error') || '');

            searchParams.delete('error');

            url.search = searchParams.toString();
            window.history.replaceState({}, '', url.href);

            const statusParam = searchParams.get('status');

            if (statusParam === '201') {
                navigate(`/view/class/${id}/${slug}`);
            }

            setRedirectUrl('');
        }
    } , [redirectUrl])

    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }



    const [dropAction , setDropAction] = useState(false);

    const toggleDropAction = () => {
        setDropAction(!dropAction);
    }

    const handleDropdownItemClick = () => {
        // Close the dropdown when an item is clicked
        setDropAction(false);
    };


    return(
        <>
            <div className=' h-full mx-auto md:pt-16 pb-4 bg-white  pt-16 px-0' style={{ minWidth:"300px"  , maxWidth:"1500px"}}>
                <div className="lg:block relative xl:w-10/12  md:w-10/12 lg:w-11/12 w-11/12 mx-auto">
                    <div className="  w-full block lg:flex  lg:justify-between mx-auto">
                        <div className="lg:w-5/12 md:w-full sm:w-11/12 w-full mx-auto mb-8 md:mt-8 md:mt-7 mt-0 lg:mx-0  ">
                            <div className="lg:py-2 md:px-3 shadow-none  :w-full lg:mx-0 mx-auto bg-white my-0 w-full  pb-1 border-radius-12" >
                                <div className="lg:mx-4 mx-0 text-left  md:pt-0 pt-4 pb-0 ">
                                    <h2 className="font16-res-400 mb-4 " style={{ color:"#646464" , fontWeight:"500"}}>Rangkuman Pengerjaan</h2>
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
                                                <p className="font13-res-300 md:font14-res-300">Point</p>
                                                <p className="my-1  font14-res-300">
                                                    {props.point} Points
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full text-left  mx-auto">
                                            <div className="pt-1  pb-2 mx-auto border-radius-4 font14-res-300 text-gray-600 ">
                                                <p className="font13-res-300 md:font14-res-300">Teacher</p>
                                                <p className="my-1  font14-res-300">
                                                    {props.teacher}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-1 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan pengerjaan</p>
                                            <p className="my-1  font14-res-300">{props.change} kali</p>
                                        </div>
                                    </div>
                                    <div className="w-full text-left  mx-auto">
                                        <div className=" pb-4 mx-auto border-radius-4 font14-res-300 text-gray-600">
                                            <p className="font13-res-300 md:font14-res-300">Kesempatan telah keluar saat pengerjaan</p>
                                            <p className="my-1 font14-res-300">{props.out_app} kali</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:mx-4 mx-0 text-left border-t border-gray-200 pt-1 pb-0 ">
                                    <p className="my-1 font13-res-300 md:font14-res-300" style={{ color:"#858585"}}>Selalu periksa kembali jawaban yang kamu isi, barangkali anda masih ragu dengan jawaban anda, dikarenakan setelah mengirimkan tugas anda tidak dapat lagi mengerimkannya kembali.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-8/12 lg:w-7/12 lg:px-0 md:px-3  px-0 md:w-full sm:w-11/12 w-full lg:ms-2 me-auto ms-auto  mb-8 nd:mt-8 mt-4 ">
                            <div className="bg-white  md:w-full   w-full text-left mx-auto ">
                                <div className="w-full lg:w-11/12 xl:w-full border-b border-purple-700 pb-2 my-3">
                                    <h2 className="font16-res-400 text-purple-700 "
                                        style={{ fontWeight:"500" }}>Daftar Jawabanmu</h2>
                                </div>
                                <div className="w-full mx-auto font15-res-300 mb-8">
                                    <ol className="list-decimal grid text-left gap-x-6 gap-y-2 font16-res-300">
                                        {prevAnswer.length === 0 ? (
                                            <div className=" grid gap-4  md:grid-cols-2 lg:grid-cols-1  xl:grid-cols-2 grid-cols-1  justify-between ">
                                                {props.question.map((item , index) => {
                                                    return(
                                                        <div
                                                            className="hover:bg-gray-50 ms-2  px-2 cursor-pointer  py-2.5 border-b border-gray-200 text-gray-500 my-1  w-11/12 dark:hover:bg-gray-600 hover:text-purple-600"
                                                            key={index} // Add key prop with a unique identifier (e.g., item.id)
                                                        >
                                                            <li className="list-item sm:w-11/12  w-10/12 mx-auto">
                                                                <p className="font14-res-300  ps-3  w-full">
                                                                    Jawaban: Tidak adaolllllllllllllllllllllllllllllllll
                                                                </p>
                                                                <p className="font13-res-300 ps-3">{item.type}</p>
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        ): (
                                            <div>
                                                {props.question.map((item, index) => {
                                                    const itemAnswer = prevAnswer[index];
                                                    return (
                                                        <div
                                                            className="hover:bg-gray-50 py-2.5 border-b border-gray-200 text-gray-500 my-1 w-10/12 dark:hover:bg-gray-600 hover:text-purple-600"
                                                            key={item.id} // Use a unique identifier as the key prop (e.g., item.id)
                                                        >
                                                            <li className="list-item sm:w-11/12 w-10/12 mx-auto">
                                                                <p className="font16-res-300 w-full">
                                                                    Jawaban: {itemAnswer && itemAnswer.answer ? itemAnswer.answer : 'Tidak ada'}
                                                                </p>
                                                                <p className="font13-res-300" style={{ color:"#a1a1a1"}}>{item.type}</p>
                                                            </li>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 xl:w-10/12 w-11/12 fixed bottom-0 " style={{ maxWidth:"1500px"}}>
                        <div className="flex  pt-6 md:mx-0 lg:mx-auto mx-auto xl:mx-5  pb-2 xl:w-full md:w-11/12 w-full justify-between  border-t gap-4 " style={{ maxWidth:"1500px"}}>
                            <a
                                href={`/view/${slug}/work/assignment/${id}`}

                                className="md:w-3/12 lg:w-2/12 w-5/12   font14-res-300 bg-white border-purple-600 border  hover:bg-gray-50 text-purple-600 py-1.5 md:py-2  px-4 rounded"
                                style={{
                                    borderRadius: "4px",
                                    fontWeight:"500",
                                }}
                            >
                                Sebelumnya
                            </a>
                            <button
                                onClick={toggleDropAction}

                               className="md:w-3/12 lg:w-2/12 w-5/12     font14-res-300 weverse-background-btn  hover:bg-purple-500 text-white py-1.5 md:py-2 px-4 rounded"
                               style={{
                                   color: "#ffffff",
                                   borderRadius: "4px",
                                   fontWeight:"500",
                                   border: "1px solid #A373E9",
                               }}
                            >
                                Mengirimkan
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {dropAction && (
                <div id="drop-action" className="flex items-center z-50 justify-center w-full fixed bottom-0 min-h-screen">
                    {/* This div serves as a backdrop and should cover the entire screen */}
                    <div onClick={handleDropdownItemClick} className="bg-gray-500 bg-opacity-30 w-full h-full absolute bottom-0 z-50" ></div>
                    {/* Centered dropdown content */}
                    <div className="absolute bg-white bottom-0 w-full  py-4 border-radius-8 z-50" style={{ borderRadius:"25px 25px 0px 0px"}}>
                        <div className="py-4 text-left w-10/12 mx-auto">
                            <h2 className="font16-res-400">Mengirimkan tugas </h2>
                            <div className="block mt-3 text-left font14-res-300">
                                <div className="flex">
                                    <p className="text-gray-700">Izin keluar dari aplikasi : </p>
                                    <p className="text-gray-500"> {props.out_app}</p>
                                </div>
                                <div className="flex">
                                    <p className="text-gray-700">Kesempatan pengerjaan : </p>
                                    <p className="text-gray-500"> {props.change}</p>
                                </div>
                            </div>
                            <div className="pt-4 pb-2">
                                <ul className="gap-3 block">
                                    {!props.isOnline ? (
                                        <li className="mb-3">
                                            <Link to={`/view/${slug}/${class_id}/task/assignment/${id}`} >
                                                <div className="py-3  border-radius-4 bg-purple-600 hover:bg-purple-700 text-white border hover:text-white font16-res-300">
                                                    <p className="mx-3 cursor-pointer">Kirim sekarangg</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ) : (<li className="mb-3">
                                            <Link disabled className="w-full">
                                                <div className="py-3  w-full border-radius-4 border-gray-400  text-gray-600 border  bg-gray-100 font16-res-300">
                                                    <p className="mx-3 cursor-pointer">Kirim sekarang</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )}


                                </ul>
                                <div className="mt-3 mx-1">
                                    <span className={"text-gray-500 font13-res-300"}>
                                        Pastikan Anda Melakukan pengerjaan sebelum deadline
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/*<div id="pop_up_detail" tabIndex="-1" onClose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full  overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] ">*/}
            {/*    <div className="absolute lg:w-6/12 md:w-7/12 sm:w-8/12 w-9/12 mx-auto h-full max-w-2xl position-pop-up md:h-auto" >*/}
            {/*        <div className="relative bg-white lg:w-8/12 md:w-11/12 top-24 rounded-lg shadow dark:bg-gray-700" style={{ height:"280px"}} >*/}
            {/*            <div className="flex items-start  md:pt-5 md:pb-5 pt-3 pb-3 px-4 border-b rounded-t dark:border-gray-600">*/}
            {/*                <h3 className="text-lg my-1 w-full mx-auto font-normal font18-res-300 text-center text-gray-900 dark:text-white">*/}
            {/*                    Mengirimkan Tugas Anda?*/}
            {/*                </h3>*/}

            {/*            </div>*/}
            {/*            <div className="lg:my-3 md:my-5 my-3">*/}
            {/*                <div className="w-10/12 my-4 text-left mx-auto" >*/}
            {/*                    <div className="my-2  relative">*/}
            {/*                        <p style={{ color:"#656565"}} className="font16-res-300">Sudah yakin mengirimkan tugas anda sekarang?, cobalah periksa lagi jawaban anda jika dirasa tidak ada masalah kirimkan sekarang.</p>*/}
            {/*                        <div className="md:mt-6 sm:mt-14 lg:mt-2 xl:mt-8 mt-16">*/}
            {/*                            <div className="flex sm:pt-4 pt-0 border-t gap-4 justify-between">*/}
            {/*                                <button*/}
            {/*                                    onClick={popUpDetail}*/}
            {/*                                    className=" w-10/12 mx-auto font16-res-300 border-b-purple-600 font16-res-300 text-purple-600   py-2 px-4 rounded"*/}
            {/*                                    style={{  borderRadius:"4px" , border:"1px solid #A373E9" }}*/}
            {/*                                >*/}
            {/*                                    Kembali*/}
            {/*                                </button>*/}
            {/*                                <form className="w-10/12" onSubmit={handleSubmit}>*/}
            {/*                                    <button*/}
            {/*                                        onSubmit={handleSubmit}*/}
            {/*                                        className="w-full  mx-auto font16-res-300 weverse-background-btn font16-res-300  hover:bg-purple-500 text-white py-2 px-4 rounded"*/}
            {/*                                        style={{ color:"#ffffff" , borderRadius:"4px" ,  border:"1px solid #A373E9" }}*/}
            {/*                                    >*/}
            {/*                                        Kirimkan*/}
            {/*                                    </button>*/}
            {/*                                </form>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}