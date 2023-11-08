

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
