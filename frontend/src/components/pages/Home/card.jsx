import thumbnail from "../../../asset/thumbnail.webp";
import { Link} from "react-router-dom";
export default function Card(props) {
    console.log(props.img)
    
    
    return (
        <div className="rounded-[40px] overflow-hidden border-2 w-full lg:w-[98%] lg:ml-4 flex flex-col-reverse lg:flex-row bg-[#000] border-[#302d2d] border-opacity-20  ">

            <div className="bg-[#292828]  p-8 lg:p  -12 lg:w-[100vmin] ">
                <div className="bg-white text-[#000] w-fit px-2 py-1 rounded-md lg:mt-4 font-semibold ">{props.author} </div>
                <div className="font-bold text-[2em] hover:cursor-pointer mt-5 text-white uppercase">{props.title}</div>
                <p className=" text-white text-[1em] mt-8 font-bold">{props.Desc}</p>

                <ol className="mt-[10vmin]">
                    {props.points?props.points.map((val,index)=>{
                        return (
                                 <li key={index} className="text-white font-semibold flex mb-4 gap-4"><span className="font-bold">✓</span>{val}</li>

                        )
                    }):""} 
                    

                </ol>
               <Link to={"/payment"} state={{title:props.title,Desc:props.Desc,author:props.author,price:props.price ,id:props.id,img:props.img}} ><button className="rounded-[40px] py-3 px-8 font-bold bg-white text-[#000]"> Premium</button>
            
            </Link></div>
            <div className="h-full ">
                <img src={props.img?props.img:thumbnail} className="w-full  h-[90vmin] lg:h-[100vmin]" />
            </div>


        </div>
    )
}