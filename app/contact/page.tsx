import NewsLetter from '@/components/NewsLetter'
import PageInfo from '@/components/PageInfo'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <PageInfo
                firstText={"Contact cafe"}
                secondText={"Regina"}
                para={
                    "You will always have a good time at Café Regina in Zelzate! You can enjoy an extensive drinks menu here, but you are also in the right place if you are hungry. You will also find some tasty weekend suggestions here! So don't hesitate to contact us by telephone or email or just drop by."
                }
            />

            <div className='w-full min-h-screen px-4 sm:px-6 lg:px-10 py-12 md:py-20 mb-20'>
                
                <div className='
                    w-full 
                    max-w-[972px] 
                    border 
                    border-gray-500 
                    mx-auto 
                    px-4 
                    sm:px-8 
                    md:px-12 
                    lg:px-20 
                    py-10 
                    md:py-16 
                    flex 
                    flex-col 
                    items-center 
                    justify-center
                '>

                    <h1 className='
                        font-[harmond] 
                        font-semibold 
                        text-3xl 
                        sm:text-4xl 
                        md:text-5xl 
                        lg:text-6xl 
                        text-[#DCCA87]
                        text-center
                    '>
                        Contact Us
                    </h1>

                    <p className='text-sm sm:text-base md:text-lg mt-4 text-center'>
                        Will do feedback as fast as we can!
                    </p>

                    <div className='w-full flex flex-col gap-6 mt-10'>

                        {/* First + Last Name */}
                        <div className='flex flex-col md:flex-row gap-6 w-full'>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='w-full p-4 md:p-5 border outline-none'
                            />

                            <input
                                type="text"
                                placeholder='Last Name'
                                className='w-full p-4 md:p-5 border outline-none'
                            />
                        </div>

                        {/* Mobile */}
                        <input
                            type="text"
                            placeholder='Mobile Number'
                            className='w-full p-4 md:p-5 border outline-none'
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder='Email Address'
                            className='w-full p-4 md:p-5 border outline-none'
                        />

                        {/* Button */}
                        <div className='flex justify-center'>
                            <button
                                className='
                                    uppercase 
                                    w-full 
                                    sm:w-48 
                                    h-14 
                                    md:h-16 
                                    font-semibold 
                                    text-black 
                                    tracking-widest 
                                    bg-[#DCCA87] 
                                    border
                                    transition-all
                                    duration-300
                                    hover:opacity-90
                                '
                            >
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <NewsLetter />
        </div>
    )
}

export default page