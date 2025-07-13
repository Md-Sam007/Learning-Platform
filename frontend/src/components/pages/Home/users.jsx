
import Rating from "react-rating";
export default function Users(props) {
    return (
        <div className="flex bg-[#222]  w-[83vmin] lg:w-[63vmin] break-words rounded-[38px] p-4">
            <div className=" w-[74vmin] lg:w-[59vmin] ">
                <div className="font-black text-[3em] text-white  font-serif">❝</div>
                <p className="text-[1.1em] text-white font-bold break-words overflow-hidden">{props.Desc}</p>
                <div className="mt-[8vmin] flex gap-4">
                    <img src={props.img} alt="users profile" className="h-[12vmin] w-[12vmin] rounded-full" />
                    <div>
                        <h1 className="text-white uppercase cursor-pointer font-semibold">{props.name}</h1>
                        <Rating initialRating={props.rating}
                            emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
                            fullSymbol={<span className="text-[#FFA500] text-xl">★</span>}
                            readonly />

                    </div>

                </div>
            </div>

        </div>

    )
}