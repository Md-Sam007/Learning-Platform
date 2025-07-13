import { useState, useEffect } from "react";
import { GraduationCap } from "lucide-react";
import { useLocation,useParams,useNavigate } from "react-router-dom";


import LoadingSpinner from "../loading/index,";


export default function Vid() {

    const [data, setdata] = useState();
    const [click, setClick] = useState(false);
    const [invis, setinvis] = useState("visible");
    const navi=useNavigate();
    const location=useLocation();

    const {state}=location;
    const {videos}=state;
    const {title,id}=useParams();
    
    useEffect(()=> {

        fetch('http://localhost:4000/vid', {
            method: "GET",
            headers:{title:title}
        }).then(res => res.json())
            .then(data => {
                
                setdata(data.videoUrl);

            }).catch(err => {
                console.log(err);
            })
    },[title])
   
    const handleClick = () => {

        if (click === false) {
            document.getElementById('but').innerHTML = "▐▐";
            setClick(true);
            setTimeout(() => {
                setinvis("invisible")
            }, 2000)
            const myVid = document.getElementById("vid");
            videoPlayr(myVid);

        }
        else {
            document.getElementById("but").innerHTML = "▶︎";

            setinvis("visible");
            setClick(false);
            const myVid = document.getElementById("vid");
            videoPlayr(myVid);



        }

    }
    const handleEvent=(val)=>{
       
        if(val!==title){
            navi(`/Mycourse/${id}/${val}`,{state:{videos:videos}})
        }
        return 
    }

    const videoPlayr = (myVid) => {
        if (myVid.paused) {
            myVid.play();
        }
        else {
            myVid.pause()
        }
    }
    
    if (data) {
        return (
            <div className="w-screen h-screen bg-[#28282B]">
                <div className="bg-[#1B1212] shadow-[#000] gap-2 p-3 w-ful h-fit shadow-xl">
                    <div onClick={()=>navi("/")} className="flex cursor-pointer w-fit">
                        <GraduationCap style={{color:"whitesmoke", height: "8vmin", width: "10vmin" }} />
                    <span className='text-3xl font-bold text-white'><span className='text-blue-600'>LMS</span>Hub</span>

                    </div>
                    

                </div>

                <div className="flex w-screen px-9 ">




                    <div className="h-fit  w-fit px-16 py-10  ">
                        <div onClick={() => { handleClick() }} className=" h-[470px]  z-10 absolute flex justify-center items-center w-[57.3%] ">
                            <button id="but" className={`p-4  px-7 bg-[#000] opacity-65 rounded-2xl ${invis} text-white `}>▶︎</button>

                        </div>
                        <div className="h-fit w-fit border-2 rounded-2xl shadow-2xl border-[#000] border-opacity-35">


                            <video id="vid" controls width={'100%'} className="h-[500px] rounded-xl w-full attachment">
                                <source src={data?data:""} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="w-full mt-2 ">
                            
                            <div className="text-[1.4em] font-bold text-[#f6f2f2] ">{title}</div>
                        </div>
                    </div>

                    <div className="h-[80vmin]   w-[60vmin] rounded-t-2xl">
                        <div className="h-[14vmin] w-full flex text-[1.4em] text-[#767474] font-bold  p-4 items-center rounded-t-2xl ">Watch More Lecture</div>
                        <div className="h-[66vmin] p-4 w-full rounded-3xl shadow-[inset_0_1px_5px_5px_rgba(0,0,0,0.6)]">
                            <ol  className="list-decimal ml-6  space-y-4 text-[1.2em] font-semibold">
                                {videos?videos.lecture.map((val,index)=>{
                                    return (
                                        <li onClick={()=>{handleEvent(val)}} key={index} className={`${val===title?"text-[#b0acac] font-bold ":" text-[#727272] font-normal hover:underline"} p-1 hover:cursor-pointer`}>{val}</li>


                                    )

                                }):""}
                                
                            </ol>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
    else {
        return (
            <div className="text-center items-center">
                <LoadingSpinner mat={"Video loading"}/>
                
            </div>

        )
    }
}

