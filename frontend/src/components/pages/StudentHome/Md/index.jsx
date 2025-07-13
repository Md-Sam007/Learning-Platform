import CircularProgress from "./circle";
import { Medal } from "lucide-react";

import { Line } from "recharts";
export default function Mid() {
    return (
        <div className="flex gap-6 mt-6">
            <div className=" p-4 rounded-[30px] w-fit bg-[#c2f6c7]">
                <h1 className="font-bold text-[1em]">Statistics</h1>
                <div className="flex justify-center"><CircularProgress value={80} /></div>

                <div className="flex mt-5 gap-6">
                    <div className=" flex gap-3">
                        <div className="bg-[#49bf59] rounded-full w-6 h-6"></div>
                        <div className="">
                            <h1 className="font-bold">80%</h1>
                            <h6 className="font-light">completed</h6>

                        </div>
                    </div>
                    <div className=" flex gap-3">
                        <div className="bg-[#667768] rounded-full w-6 h-6"></div>
                        <div className="">
                            <h1 className="font-bold">20%</h1>
                            <h6 className="font-light">Remaining</h6>

                        </div>
                    </div>
                    <div className=" flex gap-3">
                        <div className="bg-[#667768] rounded-full w-6 h-6"></div>
                        <div className="">
                            <h1 className="font-bold">20%</h1>
                            <h6 className="font-light">Remaining</h6>

                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="bg-[#dfb9b9] rounded-[35px] w-fit p-5">
                    <h1 className="font-bold text-[1.2em]">Awards</h1>
                    <div className="flex gap-6">
                        <Medal size={75} />
                        <div>
                            <h2 className="text-[1.2em] font-medium">level</h2>
                            <h6 className="font-light">Congratulation Your at 74%</h6>
                            <div className="flex gap-4">
                                <div className="h-3 bg-[#d69e9e] mt-3 rounded-[40px] w-[26vmin]">
                                    <div className="h-3 bg-[#d86b6b] rounded-[40px] w-[20vmin]"></div>
                                </div>
                                <h2 className="font-bold"> 74%</h2>
                            </div>

                        </div>

                    </div>


                </div>


                <div className="bg-[#f2c98f] rounded-[35px] mt-3 w-fit p-5">
                    <h1 className="font-bold text-[1.2em]">Growth</h1>

                    <svg width="300" height="100" viewBox=" 0 400 90">
                        <path
                            d="
                                 M0,50 
                                Q25,0 50,50 
                                T100,50 
                                T150,50 
                                T200,50 
                                T250,50 
                                T300,50"
                            stroke="#eea745"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>

                </div>

            </div>
        </div>


    )
}