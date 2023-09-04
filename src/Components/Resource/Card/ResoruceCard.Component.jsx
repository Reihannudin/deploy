import {useEffect, useState} from "react";

export const ResoruceCardComponent = (props) => {

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

    const truncatedName = props.name.length > 30 ? `${props.name.slice(0, 30)}...` : props.name;
    const truncatedLink = props.link.length > 24 ? `${props.link.slice(0, 23)}...` : props.link;
    // {window.innerWidth >= 768 ? truncatedName : props.name}

    console.log(props.link);

    const handleLinkClick = (e) => {
        e.preventDefault();
        window.open(props.link, '_blank');
    };


    return(
        <>
            <div className="w-full ">
                <div className="xl:w-11/12 w-full">
                    <a href={props.link} onClick={handleLinkClick} className="cursor-pointer">
                        <div className="flex gap-4  shadow border-gray-200 py-2 px-4">
                            <div className="w-1/12">
                                <div className="p-2 border-radius-4 me-2" style={{ background:"#A568E6" , width:"46px", height:"46px" }} >
                                    <div className=" mx-auto" style={{  width:"28px", height:"28px"}}>
                                        <img className="mx-auto my-auto h-full" src="/assets/link_icon.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-11/12 mt-1 ms-4">
                                <h2 className="font16-res-300" style={{ color:"#656060"}}>{truncatedName }</h2>
                                <p className="font15-res-300" style={{color:"#818181"}}>{truncatedLink}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}