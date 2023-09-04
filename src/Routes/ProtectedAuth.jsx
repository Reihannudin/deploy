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
import Feed from "../Pages/Feed/Feed";

export const ProtectedAuth = () => {
    return (
        <Routes>
            <Route path="/add/password" element={<AddPassword />} />
            <Route path="/add/information" element={<AddInformation />} />
            <Route path="/add/information/image" element={<AddInformationImage />} />
        </Routes>
    );
};
