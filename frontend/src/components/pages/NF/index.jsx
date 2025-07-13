import { useContext } from "react";
import { DashboardContext } from "components/context/Dashboard";
import Unauthorized from "components/unAuthorized";
import Sugg from "./sugg";

export default function PageF() {
    const {unauth, setauth }=useContext(DashboardContext);

    if(unauth){
        return(
            <Unauthorized/>
        )
    }else{
        return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-center md:gap-10">
                <div className="mt-28 flex justify-center">
                    <img className="h-[80vmin] w-[80vmin] md:h-[50vmin] md:w-[50vmin] " src="page-not-found.jpg" />
                </div>
                <div className="mt-6 md:mt-52">
                    <h2 className="md:text-[4em] text-[3.5em] ml-20 md:ml-0 font-bold text-[#999797] font-poppins leading-none">
                        <div>Sorry...</div>
                        <div>Its not you.</div>
                        <div>Its us.</div>
                    </h2>
                    <h6 className="text-[1.4em] text-center text-[#999797] font-poppins">We're experiencing an internal server problem <br />Please try again later or Contact Us</h6>

                </div>
               

            </div>
            <div className="text-center mt-6 md:mt-10 font-bold text-[#999797] ">Here are some suggestion to fill your time while we working on the issue</div>
            <div className="invisible md:visible">
                <Sugg/>
            </div>
           
        </div>
    )

    }
    
}