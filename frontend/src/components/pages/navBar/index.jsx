// Navbar.jsx
import React, { useState ,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap,UserRoundPen} from 'lucide-react'; // or use any icon library
import { DashboardContext } from 'components/context/Dashboard';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navi=useNavigate();
  const url = "http://localhost:4000";
  const { unauth, setauth } = useContext(DashboardContext);
  const toggleMenu = () => setIsOpen(!isOpen);

        

    const handleLogout=()=>{
      
      fetch(url+"/api/logout",{
        method:"GET",
        credentials:"include"
      }).then(res=>{
        
        if(res.ok){
          
          setCookie("Login","",-1);
          navi("/SignUp");
          
        }
      }).catch(error=>{
        console.error("Logout Failed",error);
      })
      
      

    }
    const getCookie=(name)=>{
      const cookies=document.cookie.split("; ");
      for(let cookie of cookies ){
        const [key,value]=cookie.split("=");
        if(key===name) 
          setauth(false);
          
          return value;

      }return false


    }
    
    const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};
    const isTrue=getCookie("Login");
    

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center  justify-between ">

      <div className=" flex gap-4 ">
        <GraduationCap size={48} />
        <span className='text-3xl font-bold'><span className='text-blue-600'>LMS</span>Hub</span>
        <span className=' hidden md:flex md:mt-2 hover:text-blue-500 cursor-pointer md:text-lg'>Explore</span>
      </div>

      {/* Desktop Nav */}
      <ul className=" hidden md:flex text-lg font-light space-x-8">

        <li className="hover:text-blue-500  cursor-pointer">Plan &  Pricing</li>
        <li className="hover:text-blue-500 cursor-pointer">Services</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>

        
         {isTrue?
         <li className="flex gap-4 mt-0 " >
         <Link to="/studentHome"><h6 className=" text-blue-600  font-semibold cursor-pointer">
            My Courses
          </h6>
          
        </Link>
        
        <div onClick={handleLogout}><UserRoundPen /></div>
        
          
        
        

      </li>
         
         
         :
         
         
         <li className="flex gap-1 " >
         <Link to="/Login"><button className=" text-blue-600 border-blue-600 border-2 px-3 py-1 rounded-xl font-semibold hover:bg-gray-200 transition">
            Login
          </button>
          
        </Link>
        <Link to="/SignUp">
          <button className="bg-blue-600 text-white px-3 py-1 font-semibold rounded-xl hover:bg-blue-900 transition">Sign Up

          </button>
        </Link>
        

      </li>}
      <li></li>


    </ul>
      

      {/* Mobile Toggle */ }
  <div className="md:hidden" onClick={toggleMenu}>
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </div>

  {/* Mobile Menu */ }
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
  );
};

export default Navbar;

