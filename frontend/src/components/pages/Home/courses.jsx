import { useEffect, useState } from "react";
import Card from "./card";
import LoadingSpinner from "../loading/index,";

export default function Courses() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/course", {
                    method: 'GET',
                })
                if (response) {

                    const result = await response.json();

                    setData(result.data);
                    setLoading(false)
                }
                

            } catch (error) {
                console.error(error)

            }

        }
        fetchData();



    }, [])
    console.log(data);


    if (loading) {
        return (
            <LoadingSpinner mat={"Courses Are Loading"} />
        )
    }
    else {
        return (
            <div>
                <h1 className="text-center font-semibold">COURSES</h1>
                <h1 className="text-center font-bold text-[2em] mt-3">BECOME SKILLED AT WHAT MATTERS</h1>


                <div className="mt-[4vmin] flex flex-col pr-3 gap-4 lg:gap-10 overflow-scroll hide-scrollbar">
                    {data ? data.map((val, index) => {
                        
                        return (<Card key={index} author={val.author} title={val.title} Desc={val.Desc} points={val.points} price={val.price} id={val["_id"]} img={val.thumbnail} />)
                    }) : ""}




                </div>
            </div>
        )

    }



}