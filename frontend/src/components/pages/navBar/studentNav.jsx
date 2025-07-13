import { useContext, useState } from "react";
import icon from "../../../asset/icon.jpg";
import React from "react";
import { Menu, X, GraduationCap, Flame,House ,Clock,MessageCircle,CreditCard,Settings  } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "components/context/Dashboard";

const StudentNav = () => {

    const [isOpen, setIsOpen] = useState(false);

      const { dashboard, setDashboard } = useContext(DashboardContext);

    
    const navi=useNavigate();

    const navItems = [{ name: "DashBoard", icon: <Flame /> },{name:"MyCourse",icon:<Flame/>},{name:"Home",icon:<House />},{name:"Lession",icon:<Clock />},{name:"Message",icon:<MessageCircle />},{name:"Reward",icon:<CreditCard />},{name:"settings",icon:<Settings />} ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClick=(item)=>{
        if(dashboard!==item.name){
            
            setDashboard(item.name)
           if(item.name==='DashBoard'){
            navi(`/studentHome`)}
            else if(item.name==='Home'){
                setDashboard("DashBoard")
                navi("/");

            }
            else{
                navi(`/${item.name}`)
            }

        }
        
            

        
    }
    

    return (
        <nav className="bg-white  w-[38vmin] shadow-2xl  px-9 py-6 flex-col items-center h-fit  ">

            <div className=" flex gap-4 ">
                <GraduationCap size={48} />
                <span className='text-3xl font-bold'><span className='text-blue-600'>LMS</span>Hub</span>

            </div>

            {/* Desktop Nav */}
            <ul className=" hidden md:flex  text-lg  lg:font-bold flex-col  mt-3 font-light ">
                {navItems.map((item,index) => (
                    <div key={index}  className={`flex ${dashboard === item.name ? "rounded-[20px] bg-gray-300 px-4  " : ""
                                } `}>
                        {React.cloneElement(item.icon, { size: 40 ,style:{marginTop:"10px",color:"#000"}  })}
                       
                        <li
                            
                            className={`hover:text-blue-800 cursor-pointer text-[#000] px-3 py-4 `}
                            onClick={()=>{handleClick(item)}}
                        >
                            {item.name}
                        </li>
                    </div>
                ))}

            </ul>


            <div className='hidden md:flex rounded-[35px] mt-7 overflow-hidden w-fit'>
                
                <img src={icon} height={"180px"} alt="icon" width={"180px"}/>
            </div>




            {/* Mobile Toggle */}
            <div className="md:hidden" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
                        <li className="hover:text-blue-500 cursor-pointer">Home</li>
                        <li className="hover:text-blue-500 cursor-pointer">Courses</li>
                        <li className="hover:text-blue-500 cursor-pointer">Plans & Pricing</li>
                        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                        <li className='flex gap-2'>
                            <button className=" text-blue-600 border-blue-600 border-2 px-3 py-2 rounded-xl hover:bg-gray-200 transition">
                                Login
                            </button>
                            <button className="bg-blue-600 text-white px-3 py-1 font-semibold rounded-xl hover:bg-blue-900 transition">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                )
            }
        </nav >
    )
}
export default StudentNav;