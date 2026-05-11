import Image from "next/image"
import Link from "next/link"

const PageInfo = ({ firstText, secondText, para }: { firstText: String, secondText: String, para: String }) => {
    return (
        <div className="w-full lg:px-30" id="backgroundImage"  >
            <div className="relative px-10 py-36 md:py-44" >
                <div>
                    <h1 className="font-[harmond] font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-9xl " >{firstText}</h1>
                    <div className="md:flex md:items-start " >
                        <h1 className="font-[harmond] font-semibold text-3xl sm:text-4xl md:text-6xl lg:text-9xl whitespace-nowrap " >{secondText}</h1>
                        <p className="md:px-10 py-5 text-[#969493] text-sm md:text-lg " >{para}</p>
                    </div>
                </div>
                <Link
                    href="/contact"
                    className="uppercase mt-5 flex gap-6 font-thin items-center md:text-3xl text-[#DCCA87] tracking-widest"
                >
                    contact us
                    <Image loading='lazy' src={"/arrowRight.svg"} width={100} height={50} alt="w-5 h-5 md:w-10 md:h-10 arrow right" />
                </Link>
            </div>
        </div>
    )
}

export default PageInfo