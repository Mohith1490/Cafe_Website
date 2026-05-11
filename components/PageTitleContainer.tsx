

const PageTitleContainer = ({Title,Para}:{Title:String,Para:String}) => {
    return (
        <div>
            <div className="w-full h-80 flex items-center justify-center" >
                <div className="flex flex-col items-center justify-center mt-10 md:mt-20 w-full md:w-3/6 space-y-3 px-4 md:px-0" >
                    <h1 className="font-[harmond] font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-9xl" >{Title}</h1>
                    <p className="text-sm md:text-lg text-center text-[#969493]" >{Para}</p>
                </div>
            </div>
        </div>
    )
}

export default PageTitleContainer