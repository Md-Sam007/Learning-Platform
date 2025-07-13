import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "components/context/Dashboard";
export default function Login() {

    const navi = useNavigate();
    const {unauth,setauth}=useContext(DashboardContext)
    const [value, setvalue] = useState({
        username: "",
        password: ""

    });
    const [message, setmessage] = useState(false)
    useEffect(() => {
        fetch('http://localhost:4000/api/me', {
            method: "GET",
            credentials: 'include', // 🔑 includes cookie,
            headers:{log:"login"}
        })
            .then(res => {
                if (res.status === 401) {
                    // not authenticated
                    console.log("not logged in")
                    
                    return null
                } 
                return res.json();

                
            })
            .then(user => {
                if(user){
                    setCookie("Login",true,1);
                    setauth(false);
                    
                    navi("/");

                }
                

            }).catch(err=>{
                console.log(err)
            })
    }, [message]);

    const handleEvent = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/Login";
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({ value })
            });
            const data = await result.json();
            if (data){
                setmessage(true);
                
                navi("/", { state: data });


            }
            

        } catch (e) {
            console.log(e);
        }
        
    }
    const setCookie = (name, value, days) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    };

    console.log(unauth)


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-[450px] w-[890px] border border-solid rounded-[20px] max-sm:w-[330px] max-sm:h-[400px] p-[15px] flex max-sm:flex-col gap-[30px] border-black/50 shadow-[10px_20px_50px_10px] shadow-[#aaaaaa]" >
                <div >
                    <div className="text-center text-[2em] font-sans">
                        Log In
                    </div>
                    <form action="">

                        <div className="inputs h-[200px] w-[400px] max-sm:w-[300px] flex flex-col">
                            <input className="h-[40px] outline-none rounded-md border-none font-[1.4em] p-[20px] bg-[#DCDCDC]" placeholder="Username" name="username" onChange={(e) => {
                                setvalue((prev) => {
                                    return { ...prev, username: e.target.value }

                                })
                            }}
                            />
                            <input className="h-[40px] outline-none border-none rounded-md mt-[30px] font-[1.4em] p-[20px] bg-[#DCDCDC]" placeholder="Password" name="password" type="password" onChange={(e) => {
                                setvalue((prev) => {
                                    return { ...prev, password: e.target.value }

                                })
                            }} />
                            <button onClick={handleEvent} className="mt-[40px] hover:text-red hover:cursor-pointer h-[40px] outline-none border-none bg-[#000] text-white font-[1.2em] rounded-[25px]"
                            >Submit</button>
                        </div>

                        <div className="text-center mt-[40px] font-[1.2em]">
                            <a className=" hover:text-red-700 " href="./SignUp">Sing Up</a>
                        </div>
                    </form>



                </div>
                <div >
                    {window.innerWidth > 500 ? <img class="LoginImage h-[410px] w-[460px] rounded-[20px] " src="https://media.istockphoto.com/id/1475054812/photo/robot-hand-making-contact-with-human-finger-on-dark-blue-background-business-communication.jpg?s=612x612&w=0&k=20&c=XnFBm3qvApmT-jxHXQOh5Gl9ws-6FbV-ZWiXF3i0a2Q=" alt="world" /> : ""}

                </div>

            </div>



        </div>

    )
}