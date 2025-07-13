const LoadingSpinner = (props) => {
    return (
        <div className="h-screen flex flex-col gap-5 items-center mt-[80vmin] lg:mt-[40vmin]">

            <div className="border-[16px] border-solid border-[#c3c0c0] border-t-[16px] border-t-solid border-t-[#3498db] rounded-[50%] w-[120px] h-[120px] spin ">

            </div>
            <div className="text-[1.6em]  text-[#bbb3b3]">
                {props.mat?props.mat:"Please Wait"}
                

            </div>
        </div>

    );
};

export default LoadingSpinner;