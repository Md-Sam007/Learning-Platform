import Home from "components/pages/Home";
import Login from "components/pages/Login/Login";
import Signup from "components/pages/Login/SingUp";
import StudenHome from "components/pages/StudentHome";
import SCourses from "components/pages/Studentcourse";
import Videos from "components/pages/videos";
import Payment from "components/pages/payment";
import SettingsPage from "components/pages/setting";
import Vid from "components/pages/videos/vid";
import PageF from "components/pages/NF";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


export default function App(){
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
            <Route path="/studentHome" element={<StudenHome/>}/>
            <Route path="/MyCourse" element={<SCourses/>}/>
            <Route path="/MyCourse/:id" element={<Videos/>}/>
            <Route path="/payment" element={<Payment/>}/>
            
            <Route path="/MyCourse/:id/:title" element={<Vid/>}/>
            <Route path ="/settings" element={<SettingsPage/>}/>

            <Route path="/Lession" element={<PageF/>}/>
            <Route path="/Message" element={<PageF/>}/>
            <Route path="/Reward" element={<PageF/>}/>
            </Routes>
        </Router>
        
    )   
}