import Image from "next/image"
import Link from "next/link"
import PageTitleContainer from "./PageTitleContainer"

const EventPage = () => {

    const imageList = [
        "restro1",
        "restro2",
        "restro4",
        "restro5",
        "restro7",
        "restro8",
        "restro9",
    ]

    return (
        <div className="w-full h-screen mb-40" >
            <div className="flex flex-col items-center justify-center" >
                <PageTitleContainer
                    Title={"Events"}
                    Para={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."}
                />
                <div className="flex items-center gap-10" >
                    <Image
                    loading='lazy'
                        src={`/arrowLeft.svg`}
                        width={10}
                        height={10}
                        alt="restro1"
                        className="w-24"
                    />
                    <Image
                    loading='lazy'
                        src={`/arrowRight.svg`}
                        width={10}
                        height={10}
                        alt="restro1"
                        className="w-24"
                    />
                </div>
            </div>
            <div className="flex overflow-x-scroll w-full h-auto mt-20 gap-20 px-10 " id="EventPageScroll" >

                {
                    imageList.map((image) => (
                        <div className="space-y-7 min-w-[270px] flex flex-col justify-between" key={image}>
                            <Image
                            loading='lazy'
                                src={`/restroImages/${image}.jpg`}
                                width={270}
                                height={267}
                                alt="restro1"
                                className="w-[270px] h-[267px] rounded-t-full"
                            />

                            <div className="space-y-3">
                                <time dateTime="2025-12-06" className="text-[#969493] text-xl">
                                    6 DEC, 2025
                                </time>
                                <h5 className="font-[harmond] font-semibold text-3xl">
                                    Lorem, ipsum dolor.
                                </h5>
                                <p className="text-[#969493] text-xl">
                                    Lorem, ipsum dolor sit amet consectetur?
                                </p>
                            </div>

                            <Link
                                href="/"
                                className="group flex gap-6 items-center text-3xl text-[#DCCA87] tracking-widest"
                            >
                                Read More
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default EventPage