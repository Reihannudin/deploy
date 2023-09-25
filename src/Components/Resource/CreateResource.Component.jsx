import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../../Config/api";

export const CreateResourceComponent = ({user}) => {

    const { id, slug } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [text, setText] = useState('Berikan deskripsi resource');
    const [urls, setUrls] = useState([]);
    const [inputValueNAME, setInputValueNAME] = useState('');
    const [inputValueURL, setInputValueURL] = useState('');

    const [searchParams] = useSearchParams();
    const [errorName, setErrorName] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [error, setError] = useState('');

    const [redirectUrl, setRedirectUrl] = useState('');
    const [redirectPath, setRedirectPath] = useState(`/view/my/class/${slug}/${id}`);
    const [isLoading, setIsLoading] = useState(false);



    const onChangeName = (e) => {
        const inputName = e.target.value;
        if (inputName.length <= 30) {
            setName(inputName);
            setErrorName("");
        } else {
            setErrorName("Nama harus terdiri dari 30 karakter atau kurang");
        }
    };


    const handleTextChange = (value) => {
        setText(value);
    };

    const handleInputNAMEChange = (e) => {
        setInputValueNAME(e.target.value);
    };

    const handleInputURLChange = (e) => {
        setInputValueURL(e.target.value);
    };


    const handleDeleteUrl = (index) => {
        const updatedUrls = [...urls];
        updatedUrls.splice(index, 1);
        setUrls(updatedUrls);
    };


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    console.log(urls)

    useEffect(() => {
        const error = searchParams.get('error_name');
        setErrorName(error)
    }, [searchParams])

    useEffect(() => {
        const error = searchParams.get('error_description');
        setErrorDescription(error)
    }, [searchParams])

    const handleAddUrl = () => {
        if (inputValueNAME.trim() !== '' && inputValueURL.trim() !== '') {
            setUrls([...urls, { name: inputValueNAME, url: inputValueURL }]);
            setInputValueNAME('');
            setInputValueURL('');
        }
    };

    let token = localStorage.getItem('auth_token');


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name: name,
            description: text,
            url_resources: urls.map((url) => ({
            name: url.name,
            link: url.url,
            })),
        };

        api
            .post(`/${slug}/${id}/create/resource`, formData , {
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
                    setErrorDescription('');
                    setError('');

                    setRedirectPath(redirectUrl);
                    navigate(redirectUrl);

                }
                else if (response.data.status === 406) {
                    console.log("response error" , response.data.errors.message)

                    if (response.data.errors.message === "Nama resource tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDescription('');
                        setError('');
                        setRedirectPath(redirectUrl);
                        setErrorName(response.data.errors.message);
                        navigate(redirectUrl);
                    } else if (response.data.errors.message === "Deskripsi resource tidak boleh kosong") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDescription('');
                        setError(''); // Clear any general error message
                        setErrorDescription(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                    else if (response.data.errors.message === "Tolong isi waktu dimulainya Absent") {
                        let redirectUrl = response.data.redirect_path;
                        setErrorName('');
                        setErrorDescription('');
                        setError(''); // Clear any general error message

                        setError(response.data.errors.message);
                        setRedirectPath(redirectUrl);
                        navigate(redirectUrl);
                    }
                }


            })
            .catch((error) => {
                // console.log("error" , error)
                setIsLoading(false); // Stop loading indicator
                const { errors } = error.response.data;
                setErrorName(errors?.name?.[0] || '');
                setErrorDescription(errors?.descritption?.[0] || '');
                setError(errors?.message?.[0] || '');
            });
    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //
    //     const formData = {
    //         name: name,
    //         description: text,
    //         url_resources: urls.map((url) => ({
    //             name: url.name,
    //             link: url.url,
    //         })),
    //     };
    //
    //     console.log(formData)
    //
    //
    //     axios
    //         // .post(`https://rest-api.spaceskool.site/public/api/${username}/${slug}/${id}/create/resource`, formData)
    //         .post(`http://127.0.0.1:8000/api/${username}/${slug}/${id}/create/resource`, formData)
    //         .then((response) => {
    //             console.log(response.data)
    //             const { redirectUrl } = response.data;
    //             setRedirectUrl(redirectUrl);
    //         })
    //         .catch((error) => {
    //             const { errors } = error.response.data;
    //             console.log(errors)
    //             setErrorName(errors?.name?.[0] || '');
    //             setErrorDescription(errors?.description?.[0] || '');
    //         });
    // };



    // useEffect(() => {
    //     if (redirectUrl) {
    //         const url = new URL(redirectUrl);
    //         const searchParams = new URLSearchParams(url.search);
    //
    //         setErrorName(searchParams.get('error_name') || '');
    //         setErrorDescription(searchParams.get('error_description') || '');
    //
    //         setName(searchParams.get('name') || '');
    //         setText(searchParams.get('description') || '');
    //
    //         searchParams.delete('error_name');
    //         searchParams.delete('name');
    //         searchParams.delete('error_description');
    //         searchParams.delete('description');
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

    return (
        <div className="h-full mx-auto md:pt-16 pt-16 px-0" style={{ minWidth: '300px' }}>
            <div className="lg:flex xl:w-9/12 md:w-10/12 sm:w-10/12 w-11/12 mx-auto">
                <div className="w-full" style={{ background: '#ffffff' }}>
                    <div className="w-full my-0 lg:my-4 mx-auto">
                        <div className="my-0 lg:my-2">
                            <form onSubmit={handleSubmit}>
                                <div className="wfull">
                                    <div className="flex w-full text-left">
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: '#777575' }}>
                                                Resource Name
                                            </label>
                                            <div className="flex w-full">
                                                <input
                                                    id="class"
                                                    required
                                                    onChange={onChangeName}
                                                    type="text"
                                                    className="md:w-11/12 w-full py-1.5 md:py-2.5 font15-res-300 border-b-gray-300"
                                                    style={{ borderBottom: '1px solid #ebebeb' }}
                                                    placeholder="Your resource name"
                                                />
                                            </div>
                                            {errorName === '' ? (
                                                <div className="my-1">
                                                </div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className={"text-red-600  font14-res-300"}>{errorName}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex w-full text-left">
                                        <div className="mt-3 w-full mx-auto">
                                            <label className="font14-res-300" style={{ color: '#777575' }}>
                                                Description
                                            </label>
                                            <div className="text-left text-gray-500 font15-res-300">
                                                <div>
                                                    <ReactQuill value={text} onChange={handleTextChange} />
                                                </div>
                                            </div>
                                            {errorDescription === '' ? (
                                                <div className="my-1">
                                                </div>
                                            ) : (
                                                <div className="my-1 text-left">
                                                    <span className={"text-red-600  font14-res-300"}>{errorDescription}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="lg:flex block  mt-2 lg:mt-5 w-full text-left">
                                        <div className="lg:w-5/12 md:w-8/12 lg:border-r lg:border-b-0 border-b border-purple-600  w-full">
                                            <label className="font14-res-300" style={{ color: '#777575' }}>
                                                Add Resource
                                            </label>
                                            <div className=" py-2 w-full font14-res-300">
                                                <input
                                                    type="text"
                                                    className="md:w-10/12 w-full  px-3 py-2 my-0 font14-res-300 border border-gray-300"
                                                    style={{ borderRadius: '2px 0px 0px 2px' }}
                                                    placeholder="Enter URL Name"
                                                    value={inputValueNAME}
                                                    onChange={handleInputNAMEChange}
                                                />
                                                <input
                                                    type="text"
                                                    className="md:w-10/12 w-full px-3 py-2 my-1 font14-res-300 border border-gray-300"
                                                    style={{ borderRadius: '2px 0px 0px 2px' }}
                                                    placeholder="Enter Link"
                                                    value={inputValueURL}
                                                    onChange={handleInputURLChange}
                                                />
                                                <div className="flex lg:mt-0 mt-2 text-right">
                                                    <button
                                                        type="button"
                                                        className="px-3 py-2 my-3 xl:w-4/12 lg:w-5/12 md:w-5/12 sm:w-4/12 w-5/12 font14-res-300 text-white bg-purple-500 rounded-md"
                                                        onClick={handleAddUrl}
                                                        style={{ borderRadius: '0px 2px 2px 0px' }}
                                                    >
                                                        Add URL
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {urls.length > 0 && (
                                            <ul className="grid w-full md:grid-cols-2 my-3 grid-cols-1 overflow-y-auto scrollbar-hide" style={{ height: "180px" }}>
                                                {urls.map((url, index) => {
                                                    const propsName = url.name.length;
                                                    const propsLink = url.url.length;
                                                    const truncatedURLName = propsName > 18 ? `${url.name.slice(0, 20)}...` : url.name;
                                                    const truncatedURLink = propsLink > 18 ? `${url.url.slice(0, 20)}...` : url.url;

                                                    return (
                                                        <div
                                                            className="md:w-11/12 sm:w-full w-11/12 justify-between shadow flex border text-gray-600 pb-1 md:my-2 my-1 mx-2 border-b last:border-b-0"
                                                            style={{ maxWidth: '560px', minWidth: "190px", height: "70px" }}
                                                            key={index}
                                                        >
                                                            <li
                                                                className="px-3 w-full flex font16-res-300 justify-between my-1 mx-2"
                                                                style={{ minWidth: "120px" }}
                                                            >
                                                                <a
                                                                    href={url.url}
                                                                    className="font16-res-300"
                                                                    style={{ width: '180px' }}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <div className="block my-3 overflow-y-auto">
                                                                        <p className="font14-res-300 text-gray-600">
                                                                            {truncatedURLName}
                                                                        </p>
                                                                        <p className="font14-res-300 text-gray-300">
                                                                            {truncatedURLink}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <div className="lg:w-3/12 w-2/12 my-auto">
                                                                <button className="my-auto" onClick={() => handleDeleteUrl(index)}>
                                                                    <div className="px-1 mx-auto my-1 py-2 bg-white hover:px-1 hover:bg-gray-100 rounded-full">
                                                                        <div className="my-auto mx-1" style={{ height: '20px' }}>
                                                                            <img
                                                                                className="h-full w-full"
                                                                                src="/assets/delete-icon.svg"
                                                                                alt="Delete"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="flex justify-between  w-full md:w-full mt-14 mx-auto text-right">
                                        <div>

                                        </div>
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="shadow weverse-background-btn py-2 lg:px-4 md:px-4 px-2 md:w-4/12 lg:w-3/12 xl:w-2/12 w-6/12 text-white border-radius-4 font15-res-300"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
