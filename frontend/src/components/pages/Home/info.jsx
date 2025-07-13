import { Medal } from "lucide-react";
import { LaptopMinimalCheck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { TicketCheck } from "lucide-react";


export default function Info(){
    return(
        <div className="mt-[20vmin] pl-[3vmin] lg:pl-[10vmin] ">
                    <div className="text-center text-[3em] font-bold mb-8">WHAT WE FOCUS ON</div>
                    <div className=" flex-col flex lg:flex-row  gap-2 lg:gap-8">
                        <div className="w-[95vmin] lg:w-[60vmin] rounded-[40px] mb-5 lg:mb-0  bg-[#222] px-8 py-10 ">
                            <div className=" flex gap-1 lg:gap-11   ">
                                <div className="text-[1.8em] lg:text-[2em] text-white lg:mt-9 font-bold">REAL-WORLD SKILLS</div>
                                <div ><Medal size={90} style={{ backgroundColor: "white", borderRadius: "24px", padding: "16px" }} /></div>

                            </div>
                            <div className="mt-6 font-bold text-[1em] text-white w-[80vmin] lg:w-[50vmin]">We teach practical real-world skills that we truly believe can have a positive impact on your life.</div>
                        </div>
                        <div className="w-[95vmin] lg:w-[65vmin] mb-5 lg:mb-0 rounded-[40px] bg-[#222] px-8 py-10 ">
                            <div className=" flex gap-1 lg:gap-8  ">
                                <div className="text-[1.8em] lg:text-[2em] text-white lg:mt-6 font-bold">ON-DEMAND
                                    COURSE VIDEOS</div>
                                <div ><LaptopMinimalCheck size={90} style={{ backgroundColor: "white", borderRadius: "24px", padding: "16px" }} /></div>

                            </div>
                            <div className="mt-6 font-bold text-[1em] text-white w-[80vmin] lg:w-[50vmin]">You can watch our courses on a mobile or computer as many time as you like, with lifetime access.</div>
                        </div>
                        <div className="w-[95vmin] lg:w-[60vmin] rounded-[40px]  bg-[#222] px-8 py-10 ">
                            <div className=" flex gap-1 lg:gap-11   ">
                                <div className="text-[1.8em] lg:text-[2em] text-white lg:mt-9 font-bold">EFFECTIVE FORMAT</div>
                                <div ><ShieldCheck size={90} style={{ backgroundColor: "white", borderRadius: "24px", padding: "16px" }} /></div>

                            </div>
                            <div className="mt-6 font-bold text-[1em] text-white w-[80vmin] lg:w-[50vmin]">Learn in the engaging format that Dhruv Rathee educational videos are known and loved for.</div>
                        </div>
                    </div>
                    <div className=" flex-col flex lg:flex-row mt-8 gap-8">
                        <div className="w-[95vmin] mb-8  lg:mb-0 lg:w-[90vmin] rounded-[40px]  bg-[#222] px-8 py-5 h-fit ">
                            <div className=" flex  lg:gap-28   ">
                                <div className="text-[2em] text-white  font-bold">STUDENT SATISFACTION</div>
                                <div ><ThumbsUp size={90} style={{ backgroundColor: "white", borderRadius: "24px", padding: "16px" }} /></div>

                            </div>
                            <div className=" font-bold text-[1em] mt-5 text-white w-[80vmin]">Learn in the engaging format that Dhruv Rathee educational videos are known and loved for.</div>
                        </div>
                        <div className="w-[95vmin] lg:w-[90vmin] rounded-[40px]  bg-[#222] px-8 py-5 ">
                            <div className=" flex lg:gap-28   ">
                                <div className="text-[2em] text-white font-bold">COMPLETION CERTIFICATE</div>
                                <div ><TicketCheck  size={90} style={{ backgroundColor: "white", borderRadius: "24px", padding: "16px" }} /></div>

                            </div>
                            <div className="mt-6 font-bold text-[1em] text-white w-[80vmin]">A certificate of completion lets you show off your accomplishment.</div>
                        </div>


                    </div>

                </div>

    )
} 