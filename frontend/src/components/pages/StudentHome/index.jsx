import { DashboardContext } from "components/context/Dashboard";
import { noop } from "@tanstack/react-table";
import StudentNav from "../navBar/studentNav";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../loading/index,";
import Unauthorized from "components/unAuthorized";

import Mid from "./Md";
import Calendar from "react-calendar";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function StudenHome() {

    const data = [
        { name: 'Monday', value: 1 },
        { name: 'Tuesday', value: 3 },
        { name: 'Wednesday', value: 3 },
        { name: 'Thusday', value: 4 },
        { name: 'Friday', value: 8 },
        { name: 'Saturday', value: 1 },
    ];
    const {lecture,setLecture}=useContext(DashboardContext);
    const url = "http://localhost:4000";
    const [name,setName]=useState();
    const [loading, setLoading] = useState(true);
    const {unauth,setauth}=useContext(DashboardContext)


    useEffect(() => {
        const fetchData=async ()=>{

        
        try {
            const response = await fetch(url + "/student/data", {
                method: "GET",
                credentials: 'include',
            })
            const result =await response.json();

            if(result.data){
                setLecture(result.data.courses);
                setName(result.data.name);
            }
            else{
                if(response.status===401){
                    setauth(false);
                }
            }



        } catch (error) {
            console.error("Fetch error",error);
            
                
        }finally{

            setLoading(false);
            
        }
        

    }
    fetchData();

    }, [])

    console.log(data)
    if(unauth===true){
        return (
            <Unauthorized/>
        )
    }
    else{
        return (
        
        <div className="">
            {loading?<LoadingSpinner/>:
            <div className="flex">
            <StudentNav />
            <div className="px-11 py-7 ">
                <div className="font-sans font-semibold text-red-500 text-[1.4em]">👋Hey,{name?name: ""}!</div>
                <div className="text-[2em]  font-bold">You've got 20 Points!</div>
                <div className="mt-[9vmin]">
                    <div className="text-[1.5em] font-bold">Time Spending</div>
                    <div className="pt-6">
                        <BarChart width={800} height={200} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis tick={true} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <Mid />



                </div>

            </div>
            <div className="w-fit p-5 rounded-[30px] border-4  h-fit mt-3 mr-2">
                <Calendar
                    view="month"
                    next2Label={false}
                    nextLabel={false}
                    prev2Label={false}
                    prevLabel={false}
                    onClickDay={noop}
                    onClickMonth={noop}
                    onClickYear={noop}
                    onChange={noop}
                    selectRange={false}
                    tileDisabled={() => true}
                    tileClassName={({ date }) => {
                        const today = new Date();
                        return date.toDateString() === today.toDateString() ? 'red-date' : '';
                    }}


                />

            </div>
        </div>


            
            
            }
            </div>

            
    )

    }

 
    
} 

