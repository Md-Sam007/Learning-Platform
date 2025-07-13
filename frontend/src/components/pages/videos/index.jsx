import StudentNav from "../navBar/studentNav";
import { useParams ,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import LoadingSpinner from "../loading/index,";
export default function Videos() {
    const {id} =useParams();
    const [data,setData]=useState()
    const navi=useNavigate();
 
    useEffect(()=>{
        const getData=async ()=>{
            try{
                const response =await fetch("http://localhost:4000/Mycourse/lectures",{
                method:'GET',
                headers:{id:id}
            })
            if(!response.ok){throw new Error(`HTTP error! status: ${response.status}`);}
            const data=await response.json();
            setData(data.data)
            

            }catch(e){
                console.error("fetch error:",e)

            }
            
        }
        getData();
        

    },[])
    console.log(data)
    
    const handleEvent=(val)=>{
        navi(`/Mycourse/${id}/${val}`,{state:{videos:data}})
    }
    return (
        <div className="flex">
            <StudentNav />
            <div className="h-fit w-full p-9 ">
                <div className="py-5 px-10 w-fit bg-gray-200 mt-5 rounded-xl ">
                    <div className="text-xl font-bold mb-4">Lectures</div>
                    <ol  className="list-decimal ml-6 space-y-4 text-[1.2em] font-semibold">

                         {data&&data.lecture.length>=1?data.lecture.map((val,index)=>{
                            return(
                            <li onClick={()=>{handleEvent(val)}} className="hover:underline cursor-pointer">{val}</li>


                            )

                        }):
                        <div className="h-[50vmin] w-[90vmin]">
                            <LoadingSpinner mat={"Loading Lectures"}/>
                        </div>
                        
                        } 
                        
                    </ol>
                </div>
            </div>
        </div>
    )
}