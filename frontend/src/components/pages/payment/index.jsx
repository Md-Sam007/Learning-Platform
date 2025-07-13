import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import image from "../../../asset/thumbnail.webp";
import Purchase from "./purchase";
import Unauthorized from "components/unAuthorized";

export default function Payment() {
    const navi=useNavigate();
    const location = useLocation();
    const { state } = location||"";
    const [isTrue, setTrue] = useState(false);
    const audio =new Audio("payment.mp3");
    

    const { title, author, Desc, price,id ,img} = state||"";
   

    const converting = (price) => {
        if(price){
           
        const actualPrice = price.replace("$", "");
        const converted = parseFloat(actualPrice) + 1250;
        return converted
        }

    }
    const handlePayment = () => {
        
        if(confirm()){
            console.log("here");
            addCourse();
        };
        
         audio.play();
        setTimeout(()=>{
            setTrue(false);
           
        },2000)



    }

    const confirm =()=>{
        fetch('http://localhost:4000/api/me', {
            method: "GET",
            credentials: 'include', // 🔑 includes cookie,,
            headers:{log:"true"}
        })
            .then(res => {
                if (res.status === 401) {
                    // not authenticated
                    console.log("not logged in");
                    alert("please log in");
                    navi("/Login");
                    setTrue(false)
                    
                    return null
                } 
                
                return res.json();

                
            })
            .then(user => {
                if(user){ 
                    setTrue(true);
                    addCourse(user.user);
                    
                }
                

            }).catch(err=>{
                console.log(err);
            })
    }
    const addCourse= (user)=>{
        fetch("http://localhost:4000/addCourse",{
            method:"POST",
            headers: {
                    "Content-Type": "application/json",
                },
            body: JSON.stringify({ author,id,title,user,img})
        }).then(async response=>{
            if(!response.ok){
                const error=await response.json()  
                throw new Error(error.message)
                
            }
            return response.json();
        }).then(data=>{
            console.log('Success:', data);
            alert("Congratulations Course Purchased");
            navi("/");

        }).catch(error=>{
            console.error('Error:', error);
            alert(error.message);
            navi("/")
        })

    }

    




    if(!state){
        return (
            <Unauthorized/>
        )

    }else{
        return (
        <div className="h-fit lg:flex  lg:relative " >
            {isTrue === true ? <Purchase /> : ""}

            <div className="flex justify-center  "><GraduationCap style={{ height: "70px", width: "50px" }} /></div>


            <div className="h-[80vh] overflow-scroll md:overflow-visible md:ml-[20vmin] md:mt-[6vmin] w-full md:w-fit p-5">
                <div>
                    <h1 className="text-[1.5em] md:text-[1.8em] font-bold">{title}</h1>
                    <h6 className="text-[0.8em] font-normal ">By {author}</h6>
                </div>
                <div className="my-4">
                    <img src={img?img:image} className="rounded-lg" />
                </div>
                <h3 className="text-[1em] font-semibold">36 lessons | 2.5 Hours of Content | Lifetime Accsssssess | Watch it any time, as many times</h3>
                <p className="text-[1em] font-normal text-[#555353] break-words my-4">{Desc}</p>

            </div>

            <div className="h-[16vmin] fixed md:hidden bottom-0 p-2 w-full mb-3 flex justify-between">
                <h2 className="text-[1.5em] , text-[#555353] mt-2 ml-2">{price}</h2>
                <button className="p-2  bg-[#000] w-[33vmin] font-bold rounded-lg text-white">Buy Now</button>
            </div>

            <div className="invisible md:visible h-full w-full p-6 px-10 bg-[#f6f2f2]">
                <h1 className="text-[1.5em] mt-5 font-semibold">Payment details</h1>
                <h4 className="text-[1em] text-[#555353]">Complete your purchase by providing your payment details.</h4>
                <div className="h-fit rounded-xl border-2 border-[#656464] border-opacity-40 shadow-xl  p-4 w-[60vmin] bg-white mt-8">
                    <h5 className="text-[1em]  font-semibold">Billing information</h5>
                    <div className="mt-4">
                        <input className="p-2 text-[1em] border-2 border-b-0 border-[#aba8a8] rounded-t-lg w-full" placeholder="Name" />
                        <input className="p-2 text-[1em] border-2 border-b-0 border-[#aba8a8] w-full" placeholder="Email" />
                        <div className=" flex h-10 p-2 outline-offset-1 border-2 border-b-0 border-[#aba8a8] w-full">
                            <h6 className="text-[1em]">+91</h6>
                            <input className="p-2 text-[1em] border-none  outline-none w-full" placeholder="Phone No." />

                        </div>
                        <input className="p-2 text-[1em] border-2 border-[#aba8a8] rounded-b-lg w-full " placeholder="zipcode" />
                    </div>


                </div>

                <div className="h-fit rounded-xl border-2 border-[#3c3b3b] border-opacity-40 shadow-xl w-[60vmin]  bg-white mt-8">
                    <div className="h-fit w-full p-4">
                        <h1 className="text-[1.2em]  text-[#302f2f]">Service </h1>
                        <div className="h-fit flex justify-between w-full ">
                            <div className="w-[30vmin] bg-white">
                                <h4 className=" text-[0.8em] text-[#2d2c2c]">{title}</h4>
                            </div>
                            <h4 className="text-[1em] text-[#454444] font-semibold">{price}</h4>


                        </div>
                        <div className="h-fit mt-3 flex justify-between w-full ">
                            <div className="w-[30vmin] bg-white">
                                <h4 className=" text-[1.2em] text-[#2d2c2c]">GST</h4>
                            </div>
                            <h4 className="text-[1em] text-[#454444] font-semibold">$1250</h4>
                        </div>

                    </div>
                    <div className="h-[8vmin] border-t-2 p-4 border-[#757474] border-opacity-50 mt-3 flex justify-between w-full ">
                        <h1>Amount To Be Paid:</h1>
                        <h2 className="text-[1em] font-bold">${converting(price)}</h2>

                    </div>
                </div>

                <button onClick={handlePayment} className="w-[60vmin] bg-[#002ead] text-white mt-8 rounded-md p-3 text-[1em] font-sans font-semibold">Proceed To Pay

                </button>


            </div>
        </div>
    )


    }
    
}