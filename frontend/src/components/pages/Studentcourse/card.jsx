import image from "../../../asset/thumbnail.webp";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
    const nav = useNavigate();
    const random = Math.floor((Math.random() * 50 - 10) + 10);

    
    return (
        <div onClick={() => { nav(`/Mycourse/${props.id}`) }}>
            <div className="h-fit w-[35vmin] p-2 rounded-lg bg-white shadow-[5px_5px_40px_5px] shadow-[#aaaaaa]">
                <img src={props.img ? props.img : image} className="rounded-lg hover:cursor-pointer hover:opacity-80" />
                <div className="flex h-4 font-semibold text-[0.7em] text-gray-700 justify-between p-2">
                    <h6>By {props.author}</h6>
                    <h6>{random} hrs</h6>
                </div>
                <div className="font-semibold text-[0.9em] my-5 mx-3">
                    {props.title}

                </div>
            </div>
        </div>

    )
}