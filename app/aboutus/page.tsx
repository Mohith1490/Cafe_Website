import NewsLetter from '@/components/NewsLetter'
import PageInfo from '@/components/PageInfo'
import Image from 'next/image'

const page = () => {
    return (
        <span>
            <PageInfo
                firstText={"Know about cafe"}
                secondText={"Regina"}
                para={"Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time! "}
            />
            <div className='w-full h-auto my-30 px-30 ' >
                <ul className='flex items-center justify-evenly border-b p-5 ' >
                    <li>
                        <button>1997</button>
                    </li>
                    <li>
                        <button>1998</button>
                    </li>
                    <li>
                        <button>1999</button>
                    </li>
                    <li>
                        <button>2000</button>
                    </li>
                    <li>
                        <button>2001</button>
                    </li>
                    <li>
                        <button>2002</button>
                    </li>
                    <li>
                        <button>2003</button>
                    </li>
                    <li>
                        <button>2004</button>
                    </li>
                </ul>
                <div className='w-7 h-7 rotate-45 absolute -translate-y-4 bg-black border-l border-t ' ></div>
            </div>
            <NewsLetter />
        </span>
    )
}

export default page