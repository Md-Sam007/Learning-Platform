import NavBar from "../navBar";
import banner from "../../../asset/background.jpg";
import Courses from "./courses";
import Users from "./users";
import Footer from "../footer";
import Info from "./info";
import { users } from "asset/reviews";

export default function Home() {
    
    

    return (
        <div >
            <NavBar />
            {/** section 1 */}
            <section>
                <div className="md:grid mt-2 grid-cols-3 gap-0 shadow-xl  ">
                    <div>
                        <div className=" text-[2em] md:text-[3em]  font-bold col-span-1 font-serif ml-[10vmin] lg:ml-[20vmin] md:mt-[20vmin]">  LEARN WHAT SCHOOL DOESN’T TEACH YOU
                        </div>
                        <div className="text-[2em]  font-light ml-[10vmin] lg:ml-[20vmin] text-[#372c2c]">Your personalized learning hub</div>
                    </div>

                    <img src={banner} height={100} className="col-span-2" width={800} alt="Banner" />
                </div>

            </section>

            {/**section 2 */}
            <section className="pl-[3vmin]  mt-[20vmin]">
                <Courses/>
               
            </section>
            {/**section 3 */}


            <section>
                <div className="lg:ml-[10vmin] mt-[20vmin]  ">
                    <div className="text-[3em] font-bold font-serif text-center usercase  mb-[10vmin] break-words">Here’s what our Current
                        Students have to say...</div>
                    <div className="ml-[10vmin] lg:ml-0 grid lg:grid-cols-3 gap-4">
                        {users.map((val,index)=>{
                            return(
                                <Users key={index} Desc={val.Desc} img={val.img} name={val.name} rating={val.ratings} />

                            )
                        })}
                        
                        
                    </div>

                </div>
            </section>


            <section>
                <Info/>


            </section>
            <Footer />


        </div>
    )
}