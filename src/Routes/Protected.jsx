import Main from "./../Pages/Home/Main";
import DetailClass from "./../Pages/Class/DetailClass";
import DetailAbsent from "./../Pages/Absents/DetailAbsent";
import DetailAbsentClassmate from "./../Pages/Absents/DetailAbsentClassmate";
import ActionAbsentPassword from "./../Pages/Absents/ActionAbsentPassword";
import ActionAbsentPhoto from "./../Pages/Absents/ActionAbsentPhoto";
import DetailTaskAssigment from "./../Pages/Assignment/DetailTaskAssigment";
import DetailTaskAssigmentClassmate from "./../Pages/Assignment/DetailTaskAssigmentClassmate";
import PreAssignment from "./../Pages/Assignment/PreAssignment";
import Task from "./../Pages/Assignment/Task";
import ReviewAssignment from "./../Pages/Assignment/ReviewAssignment";
import DetailResource from "./../Pages/Resources/DetailResource";
import MyProfile from "./../Pages/Profile/MyProfile";
import EditProfile from "./../Pages/Profile/EditProfile";
import EditProfilePassword from "./../Pages/Profile/EditProfilePassword";
import MyClass from "./../Pages/Class/MyClass";
import MyClassDetail from "./../Pages/Class/MyClassDetail";
import MyClassStudent from "./../Pages/Class/MyClassStudent";
import CreateClass from "./../Pages/Class/CreateClass";
import JoinClass from "./../Pages/Class/JoinClass";
import EditMyClass from "./../Pages/Class/EditMyClass";
import CreateAbsent from "./../Pages/Absents/CreateAbsent";
import MyDetailAbsent from "./../Pages/Absents/MyDetailAbsent";
import MyDetailAbsentStudents from "./../Pages/Absents/MyDetailAbsentStudents";
import EditMyAbsent from "./../Pages/Absents/EditMyAbsent";
import CreateResource from "./../Pages/Resources/CreateResource";
import MyDetailResource from "./../Pages/Resources/MyDetailResource";
import EditMyResource from "./../Pages/Resources/EditMyResource";
import CreateAssigment from "./../Pages/Assignment/CreateAssigment";
import MyDetailTaskAssignment from "./../Pages/Assignment/MyDetailTaskAssignment";
import MyDetailAssignmentStudents from "./../Pages/Assignment/MyDetailAssignmentStudents";
import EditAssigment from "./../Pages/Assignment/EditAssigment";
import Logout from "./../Pages/Auth/Logout";

import AddPassword from "./../Pages/Auth/AddPassword";
import AddInformation from "./../Pages/Auth/AddInformation";
import AddInformationImage from "./../Pages/Auth/AddInformationImage";


import { Route, Routes } from "react-router-dom";
import TestProfille from "../Pages/Helper/TestProfille";
import Test from "../Pages/Test";

import DetailClassClassmate from "../Pages/Class/DetailClassClassmate";
import ActionAbsentFaceRecognation from "../Pages/Absents/ActionAbsentFaceRecognation";
import ActionAbsentFaceRecognationPassword from "../Pages/Absents/ActionAbsentFaceRecognationPassword";
import OnlineAssignment from "../Pages/Error/OnlineAssignment";
import {useEffect, useState} from "react";
import api from "../Config/api";
import MainSchool from "../Pages/Home/MainSchool";
import SendVerifyCode from "../Pages/Profile/SendVerifyCode";
import FeedWrite from "../Pages/Feed/FeedWrite";
import Feed from "../Pages/Feed/Feed";
import FeedForm from "../Pages/Feed/FeedForm";
import FeedDetail from "../Pages/Feed/FeedDetail";
import SpacesDetail from "../Pages/Feed/SpacesDetail";
import FeedSearch from "../Pages/Feed/FeedSearch";

export const Protected = () => {

    const [user , setUser] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        const fetchData = async () => {
            try {
                if (!isDataFetched) {
                    const response = await api.get(`/user`);
                    await new Promise((resolve) => setTimeout(resolve, 1500));

                    const data = response.data;
                    if (isMounted) {
                        setUser(data);
                        setIsDataFetched(true);
                    }
                }
                setIsFetching(false);
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsFetching(false);
                }
            }
        }

        const timeout = setTimeout(() => {
            if (isFetching) {
                if (isMounted) {
                    setError(new Error("Timeout: Could not fetch data."));
                    setIsFetching(false);
                }
            }
        }, 20000);

        fetchData();

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    } , [user])


    return (
    <Routes>
      <Route path="/add/password" element={<AddPassword />} />
      <Route path="/add/information" element={<AddInformation />} />
      <Route path="/add/information/image" element={<AddInformationImage />} />


      {/*class Page*/}
        <Route path="/" element={<Main user={user} isFetching={isFetching} isDataFetched={isDataFetched} />} />  {/* Done */}
        <Route path="/profile" element={<MyProfile user={user} isFetching={isFetching} isDataFetched={isDataFetched}  />} />
        <Route path="/edit/profile" element={<EditProfile user={user} isFetching={isFetching} isDataFetched={isDataFetched}  />} />
        <Route path="/edit/profile/password" element={<EditProfilePassword user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>} />
        {/*<Route path="/send/verify/code" element={<SendVerifyCode  user={user} isFetching={isFetching} isDataFetched={isDataFetched}/>} />*/}


        <Route path="/feed" element={<Feed user={user} isFetching={isFetching} isDataFetched={isDataFetched} />} />
        <Route path="/feed/d/:id" element={<Feed user={user} isFetching={isFetching} isDataFetched={isDataFetched}><FeedDetail user={user} isFetching={isFetching} isDataFetched={isDataFetched} /></Feed>} />
        <Route path="/space/{id}/d/{slug}" element={<SpacesDetail user={user} isFetching={isFetching} isDataFetched={isDataFetched} />} />
        <Route path="/feed/search" element={<FeedSearch />} />


        {/*<Route path="/feed/write" element={<FeedWrite user={user} isFetching={isFetching} isDataFetched={isDataFetched} />} />*/}

        {/*<Route path="/feed/forum" element={<FeedForm user={user} isFetching={isFetching} isDataFetched={isDataFetched} />} />*/}


        {/*<Route path="/feed/forum" element={<FeedForm />} />*/}
        {/*<Route path="/feed/liked" element={<FeedLiked />} />*/}
        {/*<Route path="/feed/notification" element={<FeedNotification />} />*/}


        <Route path="/my/class" element={<MyClass />} /> {/* Done */}

        {/*==========================* Class Path ==========================*/}

        <Route path="/join/class" element={<JoinClass />} /> {/* Done */}
        <Route path="/create/class" element={<CreateClass />} /> {/* Done */}

        <Route path="/edit/my/class/:id/:slug" element={<EditMyClass />} /> {/* Done */}
        <Route path="/view/my/class/:id/:slug" element={<MyClassDetail />} /> {/* Done */}
        <Route path="/view/my/class/:id/:slug/students" element={<MyClassStudent />}/> {/* Done */}

        <Route path="/view/class/:id/:slug" element={<DetailClass />} />
        <Route path="/view/class/:id/:slug/classmate" element={<DetailClassClassmate />} />

        {/*==========================* Absensi Path ==========================*/}

        <Route path="/class/:id/:slug/create/absent" element={<CreateAbsent />} /> {/* Done */}
        <Route path="/class/:slug/:class_id/edit/absent/:id" element={<EditMyAbsent />}/> {/* Done */}
        <Route path="/view/:slug/:class_id/my/absent/:id" element={<MyDetailAbsent />}/> {/* Done */}
        <Route path="/view/:slug/:class_id/my/absent/:id/students" element={<MyDetailAbsentStudents />}/> {/* Done */}

        <Route path="/view/:slug/:class_id/detail/absent/:id" element={<DetailAbsent />} /> {/* Done */}
        <Route path="/view/:slug/detail/absent/:id/action/password" element={<ActionAbsentPassword />} /> {/* Done */}
        <Route path="/view/:slug/detail/absent/:id/action/face-recognation" element={<ActionAbsentFaceRecognation />} />
        <Route path="/view/:slug/detail/absent/:id/action/face-recognation/password" element={<ActionAbsentFaceRecognationPassword />} />


        {/*==========================* Assignment Path ==========================*/}

        <Route path="/class/:slug/:id/create/assignment" element={<CreateAssigment />}/> {/* Done */}
        <Route path="/class/:slug/:class_id/edit/assignment/:id" element={<EditAssigment />}/> {/* Done */}
        <Route path="/view/:slug/:class_id/my/assignment/:id" element={<MyDetailTaskAssignment />}/> {/* Done */}
        <Route path="/view/:slug/:class_id/my/assignment/:id/students" element={<MyDetailAssignmentStudents />}/> {/* Done */}

        <Route path="/view/:slug/:class_id/detail/assignment/:id" element={<DetailTaskAssigment />}/>

        <Route path="/view/:slug/:class_id/detail/pre/assignment/:id" element={<PreAssignment />}/>
        <Route path="/view/:slug/:class_id/task/assignment/:id" element={<Task />}/>
        <Route path="/view/:slug/:class_id/task/review/assignment/:id" element={<ReviewAssignment />}/>

        <Route path="/error/:slug/:class_id/online/assignment/:id" element={<OnlineAssignment />}/>

        {/*==========================* Resource Path ==========================*/}

        <Route path="/class/:slug/:id/create/resource" element={<CreateResource />}/> {/* Done */}
        <Route path="/class/:slug/:class_id/edit/resource/:id" element={<EditMyResource />} /> {/* Done */}

        <Route path="/view/:slug/:class_id/my/resource/:id" element={<MyDetailResource />}/>


      {/*   ======================================   */}




        <Route path="/test" element={<Test />} />
      {/*absent Page*/}


      <Route
        path="/view/:slug/detail/absent/:id/classmate"
        element={<DetailAbsentClassmate />}
      />

      <Route
        path="/view/:slug/detail/absent/:id/action/photo"
        element={<ActionAbsentPhoto />}
      />


      <Route
        path="/view/:slug/detail/resource/:id"
        element={<DetailResource />}
      />

      {/*/!*crud*!/*/}


      {/*Beneran Aman*/}



        <Route path={"/test/component"} element={<Test />}/>

      {/*/!*Auth*!/*/}
      <Route path="/logout" element={<Logout />} />
      {/*<Route path="/reset/password" element={<ForgotPassword />}/>*/}
    </Routes>
  );
};
