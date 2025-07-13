import { useContext, useState } from "react";
import StudentNav from "../navBar/studentNav";
import Card from "./card";
import { DashboardContext } from "components/context/Dashboard";
import LoadingSpinner from "../loading/index,";
import Unauthorized from "components/unAuthorized";


export default function SCourses() {
  const [activeTab, setActiveTab] = useState("LECTURES");

  const { lecture, setLecture } = useContext(DashboardContext);
  const { unauth, setauth } = useContext(DashboardContext);

  const tabs = ["LECTURES", "NOTES"];


  console.log(lecture.length)
  if (unauth||!lecture) {
    return (
      <Unauthorized />
    )

  } else {
    return (
      <div className="md:flex bg-gray-100">
        <StudentNav />
        <div className="h-fit w-full p-9 ">
          <div className="h-full w-full bg-white px-8 py-12 rounded-2xl shadow-2xl">
            {!lecture ? <LoadingSpinner /> :

              <div>
                <div className="text-[1.8em] font-bold">All Contents</div>

                <div className="mt-4 h-18 w-fit gap-2 flex rounded-lg p-2 bg-gray-200">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`h-12 cursor-pointer w-fit p-3 text-[1em] font-semibold text-blueSecondary ${activeTab === tab ? "bg-white" : "bg-gray-200"
                        } rounded-lg`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
                <div className="mt-14 pl-5 flex gap-8">
                  {lecture.length>=1? lecture.map((val, index) => {
                    return (<Card key={index} author={val.author} title={val.title} id={val.Cid} img={val.thumbnail} />)
                  }) : 
                  <div className="text-center text-[1.6em] font-bold">Courses Not Purchased Yet</div>}




                </div>

              </div>}


          </div>
        </div>
      </div>
    );

  }


}
