import React,{createContext,useState} from "react";
export const DashboardContext=createContext();


export const DashboardProvider=({children})=>{
    const [dashboard,setDashboard]=useState("DashBoard");
    const [lecture,setLecture]=useState();
    const [unauth,setauth]=useState(true);
    return (
        <DashboardContext.Provider value={{dashboard,setDashboard,lecture,setLecture,unauth,setauth}}>
            {children}
        </DashboardContext.Provider>
    )
}