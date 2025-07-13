import { IoFootsteps } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { LuMonitorCheck } from "react-icons/lu";
export default function Sugg(){
    return (
         <div className="w-screen flex justify-center mt-16 gap-3">
                <div className="flex w-[30vmin] gap-3">
                    <div className="h-fit w-fit rounded-[50%] bg-[#28c3d7] p-4">
                        <IoFootsteps style={{ height: "30px", width: "30px",color:"white" }} />
                    </div>
                    <div className="text-[#999797] font-semibold">
                        Take a walk and get some steps

                    </div>
                </div>

                <div className="flex w-[30vmin] gap-3">
                    <div className="h-fit w-fit rounded-[50%] bg-[#28c3d7] p-4">
                        <MdFastfood style={{ height: "30px", width: "30px",color:"white" }} />
                    </div>
                    <div className="text-[#999797] font-semibold">
                        Log that snack you're munching 

                    </div>
                </div>

                <div className="flex w-[30vmin] gap-3">
                    <div className="h-fit w-fit rounded-[50%] bg-[#28c3d7] p-4">
                        <LuMonitorCheck style={{ height: "30px", width: "30px",color:"white" }} />
                    </div>
                    <div className="text-[#999797] font-semibold">
                        Track your progress on the dashboard

                    </div>
                </div>

            </div>
    )

}