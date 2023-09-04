import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const LearningCardComponent = (props) => {

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    } , []);

    const propsTitle = props.title.length;
    const truncatedTitle = propsTitle > 44 ? `${props.title.slice(0, 44)}...` : props.title;

    const propsCategory = props.subject_category.length;
    const truncatedCategory = propsCategory > 24 ? `${props.subject_category.slice(0, 24)}...` : props.subject_category;



    return(
        <div className="md:w-full w-full md:me-auto mx-auto border-b lg:mb-6 md:mt-4 md:mb-4 lg:mt-6  mb-0 mt-4" style={{ minWidth:"215px" , maxWidth:"400px"}}>
            <div className="img-h">
                <img className="h-full w-full object-cover img-h" src="/assets/bg-absence.svg" />
            </div>
            <div className="sm:px-3 px-2">
                <div className="text-left mt-3 mb-0">
                    <p className="font13-res-300 text-gray-500">
                        {truncatedCategory.toUpperCase()}
                    </p>
                </div>
                <div className="text-left w-full mt-0 mb-4">
                    <h5 className="font14-res-300 sm:font15-res-300 w-full text-gray-700" >{truncatedTitle}</h5>
                </div>

                <Link className="w-full" to={`/view/${props.id}/learning/${props.subject_category.toLowerCase()}/${props.slug}`}>
                    <div className="md:my-4 w-full my-2 text-left">
                        <a className=" text-purple-600 font13-res-300 cursor-pointer hover:text-purple-700 underline" href={`/view/${props.id}/learning/${props.subject_category.toLowerCase()}/${props.slug}`}>Lihat lebih lanjut</a>
                    </div>
                </Link>
            </div>
        </div>
    )
}