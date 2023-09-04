import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const DetailLearningComponent = () => {
    const {id} = useParams();
    const [article , setArticle] = useState([]);

    const [newArticle , setNewArticle ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await  axios.get(`http://127.0.0.1:8000/api/article/${id}`);
                const data = response.data;
                setArticle(data);
            } catch (error) {
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await  axios.get(`http://127.0.0.1:8000/api/new/articles/page`);
                const data = response.data;
                setNewArticle(data);
            } catch (error) {
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])


    return(
        <>
            <div className="w-full pt-16" style={{ minWidth:"300px"}}>
                {article.map((item) => {
                    return(
                        <>
                            <div className="xl:w-10/12 lg:w-11/12 w-full block lg:flex mx-auto">
                                <div className="w-11/12 sm:w-10/12 mx-auto lg:w-8/12 lg:mx-5 my-6 border-gray-300 lg:border-r">
                                    <div>
                                        <div className="my-2">

                                            <div className="flex gap-2 scrollbar-hide overflow-x-auto">
                                                <div className="py-1 flex-shrink-0 px-2 bg-purple-700 opacity-70 " style={{ borderRadius:"30px"}}>
                                                    <p className=" text-white" style={{ fontWeight:"400" , fontSize:"12px"}}>{item.type_category}</p>
                                                </div>
                                                <div className="py-1 flex-shrink-0 px-2 bg-purple-700 opacity-70 " style={{ borderRadius:"30px"}}>
                                                    <p className=" text-white" style={{ fontWeight:"400" , fontSize:"12px"}}>{item.subject_category}</p>
                                                </div>
                                                <div className="py-1 flex-shrink-0 px-2 bg-purple-700 opacity-70 " style={{ borderRadius:"30px"}}>
                                                    <p className=" text-white" style={{ fontWeight:"400" , fontSize:"12px"}}>{item.school_category}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left w-full md:w-11/12 my-4">
                                            <h2 className="font18-res-300 md:font22-res-300" style={{ fontWeight:"500"}}>
                                                {item.title}
                                            </h2>
                                            <h5 className={"font13-res-300 md:font15-res-300 mt-2 text-gray-600"}>Creator : {item.creator}</h5>
                                            <h5 className={"font13-res-300 md:font14-res-300 mb-2 text-gray-600"}>{item.publish} • {item.time_read} read</h5>
                                        </div>
                                        <div className="my2">
                                            <div className="w-full md:w-10/12 mx-auto">
                                                <div className="" >
                                                    <img src={item.image}/>
                                                </div>
                                                <p className="font13-res-300 md:font14-res-300 text-gray-500 italic my-2">{item.image_desc}</p>
                                                <hr className="w-4 my-5 text-gray-500 bg-gray-500 mx-auto" />
                                            </div>
                                            <div className="w-full md:w-11/12">
                                                <div id="prolog">
                                                    <p className="font14-res-300 md:font15-res-300 text-gray-600 text-left">
                                                        {item.prolog}</p>
                                                </div>
                                                <div id="content">
                                                    {item.contents.map((itemContent) => {
                                                        return(
                                                            <div id="subContent" className="my-10 text-left">
                                                                <h2 className="font16-res-400 md:font18-res-300 my-3" style={{ fontWeight:"600"}}>{itemContent.title}</h2>
                                                                <p className="font14-res-300 md:font15-res-300 text-gray-600 mb-6 mt-3 text-left">
                                                                    {itemContent.content}
                                                                </p>
                                                                {itemContent.image === null ? (
                                                                    <div className="w-10/12 mx-auto" >

                                                                    </div>
                                                                ) : (
                                                                    <div className="w-10/12 mx-auto" >
                                                                        <img src={itemContent.image}/>
                                                                    </div>
                                                                )}
                                                                {itemContent.another_article === null ? (
                                                                    <div className="my-6">
                                                                    </div>
                                                                ) : (
                                                                    <div className="my-6">
                                                                        <p className="font14-res-300" style={{ fontWeight:"550"}}>Baca Juga: <a className="text-purple-600 font14-res-300 cursor-pointer"> {itemContent.another_article}</a> </p>
                                                                    </div>
                                                                )}

                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div id="closing" className="border-t">
                                                    <div id="referensi" className="my-8 text-left">
                                                        <h2 className="font16-res-400 my-3" style={{ fontWeight:"600"}}>referensi</h2>
                                                        {item.reference.map((itemReference) => {
                                                            return(
                                                                <p className="font14-res-300 md:font15-res-300 text-gray-600 mb-4 mt-3 text-left">
                                                                    {itemReference.source}
                                                                </p>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="flex">
                                                        <p className="font15-res-300 md:font16-res-400 text-gray-700 mb-4 mt-3 text-left" style={{ fontWeight:"600"}}>
                                                            Bagikan artikel ini:
                                                        </p>
                                                        <div className="flex gap-3 my-auto mx-5">
                                                            <div className="cursor-pointer" style={{ height:"24px"}}>
                                                                <img className="h-full" src="/assets/whatsapp-icon.svg"/>
                                                            </div>
                                                            <div className="cursor-pointer" style={{ height:"24px"}}>
                                                                <img className="h-full" src="/assets/facebook-icon.svg"/>
                                                            </div>
                                                            <div className="cursor-pointer" style={{ height:"24px"}}>
                                                                <img className="h-full" src="/assets/twitter-icon.svg"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-11/12 sm:w-10/12  mx-auto lg:w-4/12">
                                    <div className="text-left mt-9 mb-5">
                                        <h1 className="sm:font18-res-300 md:font22-res-300 text-gray-600" style={{ fontWeight:"550"}}>Artikel Terbaru</h1>
                                    </div>
                                    <div>
                                        <ul className="gap-5  block">
                                            {newArticle.map((itemNew) => {
                                                return(
                                                    <li>
                                                        <div className="block  border-b sm:border-b-0 pb-5 sm:pb-0 sm:flex my-6 text-left gap-2 lg:gap-3">
                                                            <div className="img-new-article" style={{ minHeight:"65px"}}>
                                                                <img className="object-cover h-full img-new-article" style={{ borderRadius:"8px 0px 8px 0px"}} src={itemNew.image}/>
                                                            </div>
                                                            <div className="w-full mt-3 sm:mt-0">
                                                                <p className="  mt-0 md:mt-2 md:my-0 font-new-article  font16-res-300 md:font15-res-300" style={{ fontWeight:"550"}}>{itemNew.title}</p>
                                                                <div className="mt-auto lg:hidden block gap-4">
                                                                    <p className="font14-res-300 text-gray-500 my-0" >{itemNew.creator} • {itemNew.subject_category}</p>
                                                                    <p className="font13-res-300 mt-4 md:mt-5 lg:my-0" style={{ fontWeight:"550"}}>${itemNew.publish} • ${itemNew.time_read} read</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}

                                            {/*<li>*/}
                                            {/*    <div className="flex flex-wrap my-6 text-left md:gap-3">*/}
                                            {/*        <div className="w-full md:w-1/2 md:pr-4">*/}
                                            {/*            <img className="w-full object-cover md:rounded-l-lg md:rounded-r-none" src="https://cdn-web.ruangguru.com/landing-pages/assets/e432def0-e619-4b3d-982a-29534642bba7.jpg" alt="Image description"/>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="w-full md:w-1/2">*/}
                                            {/*            <p className="my-2 md:my-0 text-lg md:text-base font-semibold">Gebyar Promo Paket ruangbelajar, Ayo Jadi Juara di Sekolah!</p>*/}
                                            {/*            <div className="mt-4 md:mt-0 block md:flex md:justify-between">*/}
                                            {/*                <p className="text-sm md:text-base font-semibold">16 Juli • 3 minute read</p>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}

                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}