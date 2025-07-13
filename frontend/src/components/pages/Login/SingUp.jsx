
import { useState } from "react";
export default function Signup() {

    const [value, setvalue] = useState({
        name: "",
        username: "",
        password: ""
    })

    const handleEvent = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/registration";
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ value})
            });
            const data = await result.json();
            alert(data.message);

        } catch (e) {
            console.log(e);
        }



    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-[450px] w-[890px] border border-solid max-sm:h-[400px] max-sm:w-[330px] rounded-[20px] p-[15px] flex max-sm:flex-col gap-[30px] border-black/50 shadow-[10px_20px_50px_10px] shadow-[#aaaaaa]" >
                <div >
                    <div className="text-center text-[2em] font-sans">
                        Sign Up
                    </div>
                    <form action="">

                        <div class="inputs h-[250px] w-[400px] max-sm:w-[300px] mt-2 flex flex-col">
                            <input className="h-[40px] outline-none border-none font-[1.4em] p-[20px] bg-[#DCDCDC]" placeholder="Name" name="username" onChange={(e) => {
                                setvalue((prev) => {
                                    return { ...prev, name: e.target.value }

                                })
                            }} />
                            <input className="h-[40px] outline-none border-none mt-[30px] font-[1.4em] p-[20px] bg-[#DCDCDC]" placeholder="UserName" onChange={(e) => {
                                setvalue((prev) => {
                                    return { ...prev, username: e.target.value }

                                })
                            }} />
                            <input className="h-[40px] outline-none border-none mt-[30px] font-[1.4em] p-[20px] bg-[#DCDCDC]" placeholder="password" type="password" onChange={(e) => {
                                setvalue((prev) => {
                                    return { ...prev, password: e.target.value }

                                })
                            }}

                            />
                            <button onClick={handleEvent} className="mt-[30px] h-[90px] w-full hover:text-red-700  hover:cursor-pointer  outline-none border-none bg-[#000] text-white text-[1.2em] rounded-[25px]">Submit</button>
                        </div>

                        <div class="text-center mt-[80px] max-sm:mt-[30px] font-[1.2em]">
                            <a href="./Login">Log In</a>
                        </div>
                    </form>



                </div>
                <div class="container-2">
                    {window.innerWidth >= 500 ?
                        <img class="LoginImage h-[410px] w-[460px] rounded-[20px] " src="https://media.licdn.com/dms/image/v2/D4E12AQHgd_12JtZTSA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692198206753?e=2147483647&v=beta&t=6lllxba0-2PBwMagu1Xg_6nkYM4duplUHNM0poCqnXk" alt="world" />

                        : ""}

                </div>

            </div>



        </div>

    )
}