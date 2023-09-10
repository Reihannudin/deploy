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
import TestProfille from "../Pages/Helper/TestProfille";
import Test from "../Pages/Test";

export const Protected = () => {

  return (
    <Routes>
      <Route path="/add/password" element={<AddPassword />} />
      <Route path="/add/information" element={<AddInformation />} />
      <Route path="/add/information/image" element={<AddInformationImage />} />


      {/*class Page*/}
      <Route path="/" element={<Main />} />
      <Route path="/my/class" element={<MyClass />} /> {/* Done */}
      <Route path="/profile" element={<TestProfille />} />
      <Route path="/view/class/:id/:slug" element={<DetailClass />} />
      <Route path="/view/my/class/:id/:slug" element={<MyClassDetail />} /> {/* Done */}
      <Route path="/view/my/class/:id/:slug/students" element={<MyClassStudent />}/> {/* Done */}
      <Route path="/create/class" element={<CreateClass />} /> {/* Done */}
      <Route path="/edit/my/class/:id/:slug" element={<EditMyClass />} /> {/* Done */}
      <Route path="/join/class" element={<JoinClass />} /> {/* Done */}

      {/*absent Page*/}
        <Route path="/view/:slug/detail/absent/:id" element={<DetailAbsent />} />

      <Route path="/class/:id/:slug/create/absent" element={<CreateAbsent />} /> {/* Done */}
      <Route path="/class/:slug/:class_id/edit/absent/:id" element={<EditMyAbsent />}/>
      <Route path="/view/:slug/:class_id/my/absent/:id" element={<MyDetailAbsent />}/> {/* Done */}
      <Route path="/view/:slug/:class_id/my/absent/:id/students" element={<MyDetailAbsentStudents />}/> {/* Done */}
      <Route
        path="/view/:slug/detail/absent/:id/classmate"
        element={<DetailAbsentClassmate />}
      />

      <Route
        path="/view/:slug/detail/absent/:id/classmate"
        element={<DetailAbsentClassmate />}
      />
      <Route
        path="/view/:slug/detail/absent/:id/action/password"
        element={<ActionAbsentPassword />}
      />
      <Route
        path="/view/:slug/detail/absent/:id/action/photo"
        element={<ActionAbsentPhoto />}
      />
      <Route
        path="/view/:slug/detail/assignment/:id"
        element={<DetailTaskAssigment />}
      />
      <Route
        path="/view/:slug/detail/assignment/:id/classmate"
        element={<DetailTaskAssigmentClassmate />}
      />
      <Route
        path="/view/:slug/:action/detail/pre/assignment/:id"
        element={<PreAssignment />}
      />
      <Route
        path="/view/:slug/:action/work/assignment/:id"
        element={<Task />}
      />
      <Route
        path="/view/:slug/:action/detail/review/assignment/:id"
        element={<ReviewAssignment />}
      />
      <Route
        path="/view/:slug/detail/resource/:id"
        element={<DetailResource />}
      />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/edit/profile" element={<EditProfile />} />
      <Route path="/edit/profile/password" element={<EditProfilePassword />} />
      {/*/!*crud*!/*/}

      <Route
        path="/class/:slug/:id/create/resource"
        element={<CreateResource />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/view/:slug/:class_id/my/resource/:id"
        element={<MyDetailResource />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/class/:slug/:class_id/edit/resource/:id"
        element={<EditMyResource />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/class/:slug/:id/create/assignment"
        element={<CreateAssigment />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/view/:slug/:class_id/my/assignment/:id"
        element={<MyDetailTaskAssignment />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/view/:slug/:class_id/my/assignment/:id/students"
        element={<MyDetailAssignmentStudents />}
      />{" "}
      {/*Beneran Aman*/}
      <Route
        path="/class/:slug/:class_id/edit/assignment/:id"
        element={<EditAssigment />}
      />{" "}
      {/*Beneran Aman*/}

        <Route path={"/test/component"} element={<Test />}/>

      {/*/!*Auth*!/*/}
      <Route path="/logout" element={<Logout />} />
      {/*<Route path="/reset/password" element={<ForgotPassword />}/>*/}
    </Routes>
  );
};
