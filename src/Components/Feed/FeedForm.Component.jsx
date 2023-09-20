import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {FeedBarComponent} from "./FeedBar.Component";
import {FeedFormCardComponent} from "./Card/FeedFormCard.Component";

export const  FeedFormComponent = () => {

    const navigate = useNavigate();

    const handleTabCLick = (e , tabName) => {
        e.preventDefault();
        navigate(`/feed/form#${tabName}`)
    }


    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click" , function (e){
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++){
                    tabTogglers[i].parentElement.classList.remove("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" );
                    tabContents.children[i].classList.remove("hidden");

                    if("#" + tabContents.children[i].id === tabName){
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                    e.target.parentElement.classList.add("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])


    return(
        <>
            <div className='h-full mx-auto md:pt-16 pt-16 px-0' style={{ minWidth: "375px" }}>
                <div className="xl:w-10/12 lg:w-full md:w-full w-full mx-auto">
                    <div className="flex justify-between my-6 w-full">
                        <div className="lg:w-4/12 md:w-4/12 relative">
                            <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">
                                <FeedBarComponent />
                            </div>
                        </div>
                        <div className="lg:w-8/12 md:w-8/12 w-10/12">
                            <div className="lg:w-full md:w-full sm:w-11/12 w-full">
                                <div className="relative w-full">
                                    <div className="fixed pt-5 top-16 xl:w-7/12 lg:w-8/12 md:w-8/12 w-10/12 bg-white">
                                        <ul id="tabs" className="flex mt-1 font16-res-300 justify-between  w-full mx-auto px-1 pb-1 text-purple-500">
                                            <li className="px-4 w-full border-b text-gray-500 hover:text-purple-600 mx-4 font-normal py-2">
                                                <a id="default-tab" className="w-full" href="#world" onClick={(e) => handleTabCLick(e, 'world')}>World</a>
                                            </li>
                                            <li className="px-4 w-full text-gray-500 hover:text-purple-600 font-normal py-2">
                                                <a href="#pertanyaanmu" className="w-full" onClick={(e) => handleTabCLick(e, 'pertanyaanmu')}>Pertanyaan mu</a>
                                            </li>
                                            <li className="px-4 text-gray-800 hidden font-semibold py-2">
                                                <a href="#fourth">Tab 4</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-auto" >
                                    <div id="tab-contents" className="w-full h-full">
                                        <div id="world" className="pb-2 px-4">
                                            <div className="w-full pb-5">
                                                <div className="mt-10 ">
                                                    <div className="w-full my-4 mx-auto">
                                                        <ul className="gap-2">
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="pertanyaanmu" className="hidden pb-2 px-4">
                                            <div className="w-full pb-5">
                                                <div className="mt-10 ">
                                                    <div className="w-full my-4 mx-auto">
                                                        <ul className="gap-2">
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                            <li className="mb-0">
                                                                <FeedFormCardComponent />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="fourth" className="hidden py-2 px-4">
                                            Fourth tab
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}