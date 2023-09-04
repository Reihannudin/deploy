import React, {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";


export const EditProfileComponent = (props) => {

    const [name , setName] = useState('');
    const [username , setUsername] = useState('');
    const [bio , setBio] = useState('');
    const [address , setAddress] = useState('');
    const [birthday , setBirthday] = useState('');

    useEffect(() => {
        setName(props.name);
    } , [props.name])
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name);
    };

    useEffect(() => {
        setUsername(props.username);
    } , [props.username])
    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(username);
    };

    useEffect(() => {
        setBio(props.bio);
    } , [props.bio])
    const onChangeBio = (event) => {
        const bio = event.target.value;
        setBio(bio);
    };


    useEffect(() => {
        setAddress(props.address);
    } , [props.address])
    const onChangeAddress = (event) => {
        const address = event.target.value;
        setAddress(address);
    }


    useEffect(() => {
        setBirthday(props.birthday);
    } , [props.birthday])

    const onChangeBirthday = (event) => {
        const birthday = event.target.value;
        setBirthday(birthday);
    }

    const [searchParams] = useSearchParams();
    const [errorName , setErrorName] = useState('');
    const [errorUsername , setErrorUsername] = useState('');
    const [errorBio , setErrorBio] = useState('');
    const [errorAddress , setErrorAddress] = useState('');
    const [errorBirthday , setErrorBirthday] = useState('');

    useEffect(() => {
        const error = searchParams.get('error_name');
        setErrorName(error);
    }, [searchParams]);

    useEffect(() => {
        const error = searchParams.get('error_username');
        setErrorUsername(error);
    }, [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_bio');
        setErrorBio(error);
    }, [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_address');
        setErrorAddress(error);
    }, [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_birthday');
        setErrorBirthday(error);
    }, [searchParams])

    return(
        <>
            <div className='h-full mx-auto md:pt-20  pt-16 px-0' style={{ minWidth:"300px"}}>
                <div className="lg:flex  w-full mx-auto">
                    <div  className="w-full" style={{ background:"#ffffff"}}>
                        <div className="xl:w-9/12 lg:w-10/12 md:w-11/12 w-full mx-auto">
                            <div className="my-2">
                                <form >
                                    <div className="w-full mx-auto   ">
                                        <div className="w-full">
                                            <div className="relative md:my-4 my-0">
                                                <div className="h-profile-banner mb-3" style={{ width:"100%"}}>
                                                    {props.banner === null ? (
                                                        <img className="w-full object-cover h-full md:border-radius-8 border-none h-profile-banner"  src="/assets/bg-absence.svg"/>
                                                    ): (
                                                        <img className="w-full object-cover h-full md:border-radius-8 border-none h-profile-banner"  src={props.banner}/>
                                                    )}
                                                    <div className="bg-gray-600  absolute top-0 left-0 w-full h-full" style={{ opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div className="flex gap-4">
                                                            <div>
                                                                <img style={{ height: '24px' }} src="/assets/add_photo_gray_icon.svg" alt="Add Photo" />
                                                            </div>
                                                            <div>
                                                                <img style={{ height: '28px' }} src="/assets/close_gray_icon.svg" alt="Add Photo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute lg:top-36 md:top-32 sm:top-32 top-28 md:left-6 left-3">
                                                    <div className="radius-100 bg-white p-1 h-profile-round" style={{ position: 'relative' }}>
                                                        {props.photoProfile === null ? (
                                                            <img className="w-full h-full radius-100" style={{ objectFit: 'cover' }} src="/assets/default-profile.svg" alt="Profile" />
                                                        ):(
                                                            <img className="w-full h-full radius-100" style={{ objectFit: 'cover' }} src={props.photoProfile} alt="Profile" />
                                                        )}
                                                        <div className="bg-gray-600 radius-100 absolute top-0 left-0 w-full h-full" style={{ opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <div>
                                                                <img style={{ height: '24px' }} src="/assets/add_photo_gray_icon.svg" alt="Add Photo" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" block mt-16 w-11/12 mx-auto text-left ">
                                            <div className="sm:flex block gap-4  w-full text-left " >
                                                <div className="mt-2 w-full mx-auto">
                                                    <div className="blcok border-radius-4  w-full">
                                                        <label className="font13-res-300 my-0 py-0 mx-3" style={{ color:"#777575" }}>Nama</label>
                                                        <input id="class" placeholder="Nama" required onChange={onChangeName} value={name} type="text" className="w-full focus:outline-none px-3 pb-1 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} />
                                                    </div>
                                                    {errorName === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorName}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-2 w-full mx-auto">
                                                    <div className="blcok  border-radius-4  w-full">
                                                        <label className="font13-res-300 my-0 py-0 mx-3" style={{ color:"#777575" }}>username</label>
                                                        <input id="class" placeholder="Username" required onChange={onChangeUsername} value={username} type="text" className="w-full focus:outline-none px-3 pb-1 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} />
                                                    </div>
                                                    {errorUsername === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorUsername}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="lg:flex md:block block gap-4 w-full text-left">
                                                <div className="mt-2 w-full mx-auto">
                                                    <div className="block border border-radius-4 w-full" style={{ height: "80px" }}>
                                                        <textarea id="class" placeholder="BIO" onChange={onChangeBio} value={bio} className="w-full pt-2 focus:outline-none px-3 pb-1 font16-res-300 border-b-gray-300" style={{ height: "80px", borderBottom: "1px solid #ebebeb", resize: "none" }} />
                                                    </div>
                                                    {errorBio === '' ? (
                                                        <div className="my-2"></div>
                                                    ) : (
                                                        <div className="my-2">
                                                            <span className="text-red-600 font14-res-300">{errorBio}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-2 w-full mx-auto">
                                                    <div className="blcok border border-radius-4  w-full">
                                                        <input id="class" placeholder="Address" required onChange={onChangeAddress} value={address} type="text" className="w-full pb-3 focus:outline-none px-3 pt-2 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} />
                                                    </div>
                                                    {errorAddress === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorAddress}</span>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>
                                            <div className="flex sm:block lg:flex sm:mt-2 mt-0 gap-3 justify-between">
                                                <div className="w-full">
                                                    <div className="blcok w-full">
                                                        <label className="font13-res-300 my-0 py-0 mx-3" style={{ color:"#777575" }}>Birthday</label>
                                                        <input id="class" placeholder="Birthday" onChange={onChangeBirthday}  value={birthday} type="date" className="w-full focus:outline-none px-3 pb-1 font16-res-300 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} />
                                                    </div>
                                                    {errorBirthday === '' ? (
                                                        <div className="my-2">
                                                        </div>
                                                    ): (
                                                        <div className="my-2">
                                                            <span  className={"text-red-600 font14-res-300"}>{errorBirthday}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="blcok w-full sm:mt-4 mt-0 ">
                                                    <label className="font13-res-300 w-full my-0 py-0 mx-3" style={{ color:"#777575" }}>Password</label>
                                                    <p className="w-full mt-1 focus:outline-none cursor-pointer px-3 pb-1 font16-res-300 text-gray-500 hover:text-purple-600 border-b-gray-300" >
                                                       <Link to={'/edit/profile/password'}>
                                                           Change Password
                                                       </Link>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex justify-between  w-11/12 mx-auto mt-20 text-right">
                                            <div></div>
                                            {/*<button*/}
                                            {/*    type="submit"*/}
                                            {/*    className="shadow weverse-background-btn py-2 lg:px-4 font16-res-300 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>*/}
                                            {/*    Edit Kelas*/}
                                            {/*</button>*/}
                                            <button
                                                type="submit"
                                                className="shadow weverse-background-btn py-2 lg:px-4 font16-res-300 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>
                                                Update Profile
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}