import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {LearningCardComponent} from "./LearningCard.Component";


export  const  LearningListComponent = () => {
    const [isDropdownFilterAbsent , setIsDropdownFilterAbsent] = useState(true);
    const navigate = useNavigate();

    const toggleDropdowFilterAbsent = () => {
        setIsDropdownFilterAbsent((prevHidden) => ! prevHidden);
    }

    const [categories , setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await  axios.get(`https://rest-api.spaceskool.site/public/api/categories`);
                const response = await  axios.get(`http://127.0.0.1:8000/api/categories`);
                const data = response.data;
                setCategories(data);
            } catch (error) {
                console.log("Error Fetching class data:"  , error)
            }
        }
        fetchData()
    } , [])


    const [currentPage, setCurrentPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [totalPages, setTotalPages] = useState(1); // Initialize totalPages with 1
    const [pageNumbers, setPageNumbers] = useState([]); // Initialize pageNumbers as an empty array

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const [filterCategory, setFilterCategory] = useState('');

    const handleFilterCategoryClick = (filterValue) => {
        setFilterCategory(filterValue);
        const url = `?category=${filterValue}`;
        navigate(url); // Replace navigate with your navigation function
    };

    const [search, setSearch] = useState('');

    const onChangeSearch = (event) => {
        const searchValue = event.target.value;
        setSearch(searchValue);
    };

    const handleSearchArticle = (filterValue) => {
        setSearch(filterValue);
        const url = `?search=${filterValue}`;
        navigate(url);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get(`http://127.0.0.1:8000/api/articles?page=${currentPage}&search=${search}&category=${filterCategory}`);
                const response = await axios.get(`http://127.0.0.1:8000/api/articles?page=${currentPage}&search=${search}&category=${filterCategory}`);
                const data = response.data;
                setArticles(data.articles);
                setTotalPages(data.articles.last_page);
                setPageNumbers(data.pageNumbers);
            } catch (error) {
                console.log("Error Fetching class data:", error);
            }
        };
        fetchData();
    }, [currentPage, filterCategory , search]);

    console.log(categories)
    // console.log(articles);

    return(
        <>
            <div className="bg-white  w-full">
                <div>
                    <section className="lg:w-11/12 w-full mx-auto pt-10 " style={{ background:"#ffffff", minWidth:"300px"}}>
                        <div className="mt-10 ">
                            <div className="xl:w-10/12 w-11/12 mx-auto md:flex md:justify-between block">
                                <div className="flex  lg:me-0 me-auto xl:w-4/12 lg:w-5/12 md:w-5/12 w-full ">
                                    <div className="flex  w-full">
                                        <div className="lg:w-10/12 w-full font15-res-300">
                                            <input className="bg-white text-gray-500 border border-gray-100 font15-res-300 px-3 py-3 xl:py-2 w-full" onChange={onChangeSearch} placeholder="Cari materi" type="text" />
                                        </div>
                                        <div className="lg:w-2/12 ">
                                            <button onClick={() => handleSearchArticle(search)} className="btn py-2.5 border  bg-purple-600 text-white lg:block border-purple-600  sm:px-5 md:px-2 px-4 lg:px-1 xl:py-2 xl:px-2 " style={{ borderRadius:"0px 4px 4px 0px"}}>
                                                <div className="my-auto " style={{ height:"23px"}}>
                                                    <img className="h-full w-full" src="/assets/search-icon-white.svg"/>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:w-6/12">
                                    <div className="flex gap-3 md:my-0 my-4 ms-0 md:ms-auto  lg:w-10/12 w-9/12">
                                        <div className="flex gap-2 ms-0 md:ms-auto scrollbar-hide overflow-x-auto">
                                            {categories.map((item) => {
                                                return(
                                                    <>
                                                        <div className="flex-shrink-0 " key={item.id}>
                                                            <div className="border-radius-20 px-3  hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 lg:py-1.5 py-2 lg:px-4 lg:my-1.5  border">
                                                                <div className="flex my-auto">
                                                                    <button onClick={() => handleFilterCategoryClick(item.name)} className="font14-res-300 text-gray-600 hover:text-purple-600">
                                                                        {item.name}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="relative ms-auto lg:my-1 md:my-0 my-3">
                                        <button className="my-auto"  onClick={toggleDropdowFilterAbsent}>
                                            <div  className="px-1 py-2 bg-white hover:px-1 hover:bg-gray-100 radius-100 ">
                                                <div className="my-auto  mx-1 " style={{ height:"24px"}}>
                                                    <img className="h-full w-full" src="/assets/filter-icon.svg"/>
                                                </div>
                                            </div>
                                        </button>
                                        <div id="dropdown_profile"
                                             className={`z-10 ${isDropdownFilterAbsent ? 'hidden' : ''} absolute right-0 top-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600`}>
                                            <ul className="py-2 text-sm text-left text-gray-700 font14-res-300 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-purple-600 dark:hover:text-white" >Terbaru</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="xl:w-10/12 w-11/12 mx-auto md:my-4 my-0" />
                        <div className='relative lg:w-full w-11/12  mx-auto flex mt-6 items-center'>
                            <div className=" xl:w-11/12 lg:w-full md:w-full sm:w-11/12 w-full mx-auto relative">
                                <div className="w-full lg:w-11/12 flex  mx-auto">
                                    <h1 className="lg:pb-0 smw-full w-m-t-news text-gray-500 lg:mx-2 mx-0 text-left md:pb-0  pb-0 pt-0 font18-res-300">
                                        Materi Terkini
                                    </h1>
                                </div>
                                <div className="lg:w-11/12 w-full flex mx-auto">
                                    {articles.length === 0 ? (
                                        <div className="sm:gap-3 gap-1 py-0  mx-auto    flex flex-wrap  ">
                                            <div className="md:py-8 sm:py-6 py-4">
                                                <div className="mb-0 mt-2">
                                                    <div>
                                                        <div className="mx-auto">
                                                            <img className="w-full mx-auto h-full" src="/assets/tidak-ada-pembelajaran.svg"  style={{ maxHeight: "250px", maxWidth: "380px" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="sm:gap-3 gap-1 xl:grid-cols-4 sm:ms-0 sm:mx-auto  flex flex-wrap sm:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 ">
                                            {articles.map((item) => {
                                                return(
                                                    <div className=" mx-0 sm:mx-0  w-res-card-news sm:w-full" key={item.id} style={{ minWidth:"215px" , maxWidth:"400px"}}>
                                                        <LearningCardComponent id={item.id} slug={item.slug} title={item.title} subject_category={item.subject_category}/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className=" border-t mt-10 w-full">
                            <div className="w-7/12 py-2 mx-auto">
                                <div className="flex w-full font14-res-300 justify-center mt-4">
                                    {/* Previous button */}
                                    <button
                                        className="mx-1 px-2 py-1.5 rounded-full bg-gray-50"
                                        onClick={goToPreviousPage}
                                        disabled={currentPage === 1}
                                    >
                                        <div style={{ height:"15px"}}>
                                            <img className="h-full" src="/assets/arrows-left.svg"/>
                                        </div>
                                    </button>

                                    {/* Pagination buttons */}
                                    {pageNumbers.map((number) => (
                                        <button
                                            key={number}
                                            className={`mx-1 px-3 py-1 rounded-full ${
                                                currentPage === number ? "bg-purple-600 text-white" : "bg-gray-200"
                                            }`}
                                            onClick={() => handlePageChange(number)}
                                        >
                                            {number}
                                        </button>
                                    ))}

                                    {/* Next button */}
                                    <button
                                        className="mx-1 px-2 py-1.5 rounded-full bg-gray-50"
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                    >
                                        <div style={{ height:"15px"}}>
                                            <img className="h-full" src="/assets/arrows-right.svg"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}