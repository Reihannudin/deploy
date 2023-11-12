import { FeedBarComponent } from "./FeedBar.Component";
import { FeedCardComponent } from "./Card/FeedCard.Component";
import { MainNavComponent } from "../Body/MainNav/MainNav.Component";
import {useState} from "react";
import { Link } from "react-router-dom";
import {MainNavSchoolComponent} from "../Body/MainNav/MainNavSchool.Component";
import {FeedMiniBarComponent} from "./FeedMiniBar.Component";
import {FeedSpacesComponent} from "./FeedSpaces.Component";

export const FeedComponent = () => {



  const [dropAction , setDropAction] = useState(false)

  const toggleDropAction = () => {
    setDropAction(!dropAction);
  }


  const handleDropdownItemClick = () => {
    setDropAction(false);
  };


  return (
    <>
      {/*{dropAction && (*/}
      {/*    <div id="drop-action" className="flex fixed items-center justify-center w-full z-50 min-h-screen">*/}
      {/*      /!* This div serves as a backdrop and should cover the entire screen *!/*/}
      {/*      <div onClick={handleDropdownItemClick} className="bg-gray-500 bg-opacity-40  w-full h-full z-40 absolute bottom-2"></div>*/}

      {/*      /!* Centered dropdown content *!/*/}
      {/*      <div className="bg-white fixed right-10 py-4 z-50 border-radius-8" style={{bottom :"160px"}}>*/}
      {/*        <Link to={'/feed/write'}>*/}
      {/*          <div className="py-3  px-4 hover:bg-gray-100 font14-res-300">*/}
      {/*            <div className="mx-auto" style={{height:"24px"}}>*/}
      {/*              <img className="w-full h-full mx-auto" src={"/assets/icon-write-purple.svg"}/>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </Link>*/}
      {/*        <Link to={'/feed/write'}>*/}
      {/*          <div className="py-3 px-4  hover:bg-gray-100 font14-res-300">*/}
      {/*            <div className="mx-auto" style={{height:"24px"}}>*/}
      {/*              <img className="w-full h-full mx-auto" src={"/assets/add_photo_purple_icon.svg"}/>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*)}*/}

      <div
        className="h-full w-11/12  mx-auto md:pt-16 pt-16 px-0"
        style={{ minWidth: "300px" }}
      >
        <div className="block w-full md:hidden">
          <MainNavSchoolComponent  />
        </div>
        <div className="xl:w-11/12  relativelg:w-full md:w-full w-full mx-auto">
          <div className="flex justify-between my-4 md:my-6 w-full">
            <div className="sm:w-1/12 w-2/12 relative">
              <div className="    fixed w-3-3   lg:mx-3 xl:mx-4   top-auto   ">
                {/*<FeedBarComponent />*/}
                <FeedMiniBarComponent />
              </div>

            </div>

            <div className="lg:w-7/12 md:w-7/12 w-10/12 md:mx-auto">
              <div className=" md:w-full  w-full">
                  <div
                      className="shadow bg-white w-full sm:px-2.5 px-2.5 py-2  flex justify-between border"
                      style={{ borderRadius: "30px" }}
                  >
                    <Link to="/feed/write">
                      <div className="flex w-full text-left">
                        <input
                            readOnly={true}
                            className="my-auto w-full sm:mx-4 mx-2 font14-res-300 text-gray-500"
                            placeholder="Apa yang kamu pikirkan?"
                        />
                      </div>
                    </Link>
                    <div className="flex sm:mx-4 mx-2 sm:gap-3 gap-1">
                      <button className="my-auto h-icon-menu">
                        <img
                            className="h-full my-auto"
                            src="/assets/image-icon.svg"
                        />
                      </button>
                      <button className="my-auto  h-icon-menu">
                        <img
                            className="h-full my-auto"
                            src="/assets/emoji-icon.svg"
                        />
                      </button>
                    </div>
                  </div>


                {/*=========================*/}

                <div className="w-full my-4 mx-auto">
                  <ul className="gap-2">
                    {/*{feeds.map((feed) => (*/}
                      <li className="my-0">
                        <FeedCardComponent  />
                      </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>
                    <li className="my-0">
                      <FeedCardComponent  />
                    </li>

                    {/*))}*/}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 md:w-5/12 relative">
              <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-5/12 left-auto  top-auto  ">
                {/*<FeedBarComponent />*/}
                <FeedSpacesComponent />
              </div>
            </div>

            {/*<div className="lg:w-4/12 md:w-4/12 relative">*/}
            {/*  <div className="fixed   xl:w-3/12 lg:w-4/12 sm:w-2/12 w-2/12  md:w-4/12 left-auto  top-auto  ">*/}
            {/*    <FeedBarComponent />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          {/*<div className="fixed  right-10  bottom-24 z-50  flex justify-center items-center">*/}
          {/*  <div className="bg-white border-b border-l border-r z-50  border-gray-300 rounded-full">*/}
          {/*    <button onClick={toggleDropAction} style={{ transform: dropAction ? 'rotate(40deg)' : 'none' ,    transition: 'transform 0.3s ease-in-out' }}  className="bg-purple-600 p-3 rounded-full">*/}
          {/*      <img className="h-icon-add" src="/assets/add-icon-white.svg" alt="Add Icon" />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};
