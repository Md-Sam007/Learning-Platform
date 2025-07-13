import { FaCheckCircle } from "react-icons/fa";
export default function Purchase(){
    return(
        <div className="absolute  h-screen w-full ">
            <div className="h-full w-full bg-[#d3cece] opacity-40">

            </div>
            <div className="absolute h-[25vmin] p-4 rounded-2xl w-[60vmin] border-2  bg-[#a09d9d] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <h1 className="text-center text-[1.4em] font-bold">Payment Successful</h1>
            <div className="flext justify-center ml-[43%] mt-6 ">
                <FaCheckCircle style={{color:"blue",fontSize:"4em"}} />

            </div>
            


            
            
            

            </div>
        </div>  
    )
}