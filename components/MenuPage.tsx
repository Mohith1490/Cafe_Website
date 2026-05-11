"use client"

import Image from "next/image"
import Link from "next/link"

const MenuPage = () => {

    return (
        <>
            <div className="w-full py-10" id="menuPage">

                {/* SECTION 1 */}
                <section className='
                    max-w-[1440px]
                    mx-auto
                    min-h-screen
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-10
                    px-4
                    sm:px-6
                    lg:px-10
                    py-10
                    items-center
                '>

                    {/* Left Content */}
                    <div className='flex flex-col justify-center space-y-5 text-center lg:text-left'>

                        <h2 className='
                            font-[harmond]
                            font-semibold
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                        '>
                            Extensive Drinks
                        </h2>

                        <span className='
                            text-sm
                            sm:text-base
                            lg:text-lg
                            text-[#969493]
                            leading-relaxed
                        '>
                            At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time!
                        </span>

                    </div>

                    {/* Center Image */}
                    <div className='flex items-center justify-center'>

                        <Image
                            loading='lazy'
                            src={"/wine-glass.svg"}
                            alt="wine glass"
                            width={541}
                            height={639}
                            className='
                                w-full
                                max-w-[220px]
                                sm:max-w-[350px]
                                lg:max-w-[541px]
                                h-auto
                                object-contain
                                mix-blend-difference
                            '
                        />

                    </div>

                    {/* Right Content */}
                    <div className='flex flex-col justify-center'>

                        <ul className='
                            font-[harmond]
                            font-normal
                            uppercase
                            px-2
                            sm:px-5
                            lg:px-10
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            leading-relaxed
                            text-center
                            lg:text-left
                        '>

                            <li>BEERS BOTTLE</li>
                            <li>Aperitifs/Degestives</li>
                            <li>Draft beers</li>
                            <li>Soft drinks</li>

                            <Link
                                href="/contact"
                                className='
                                    mt-8
                                    flex
                                    justify-center
                                    lg:justify-start
                                    gap-4
                                    items-center
                                    text-lg
                                    sm:text-2xl
                                    lg:text-3xl
                                    text-[#DCCA87]
                                    tracking-widest
                                '
                            >
                                all menu

                                <Image
                                    loading='lazy'
                                    src={"/arrowRight.svg"}
                                    width={40}
                                    height={20}
                                    alt="arrow right"
                                    className='w-8 sm:w-10 h-auto'
                                />
                            </Link>

                        </ul>

                    </div>
                </section>

                {/* SECTION 2 */}
                <section className='
                    max-w-[1440px]
                    mx-auto
                    min-h-screen
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-10
                    px-4
                    sm:px-6
                    lg:px-10
                    py-10
                    items-center
                '>

                    {/* Left Content */}
                    <div className='flex flex-col justify-center space-y-5 text-center lg:text-left'>

                        <h2 className='
                            font-[harmond]
                            font-semibold
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                        '>
                            Small Hunger
                        </h2>

                        <span className='
                            text-sm
                            sm:text-base
                            lg:text-lg
                            text-[#969493]
                            leading-relaxed
                        '>
                            Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer.
                        </span>

                    </div>

                    {/* Center Image */}
                    <div className='flex items-center justify-center'>

                        <Image
                            loading='lazy'
                            src={"/chips.svg"}
                            alt="chips"
                            width={541}
                            height={639}
                            className='
                                w-full
                                max-w-[220px]
                                sm:max-w-[350px]
                                lg:max-w-[541px]
                                h-auto
                                object-contain
                                mix-blend-difference
                            '
                        />

                    </div>

                    {/* Right Content */}
                    <div className='flex flex-col justify-center'>

                        <ul className='
                            font-[harmond]
                            font-normal
                            uppercase
                            px-2
                            sm:px-5
                            lg:px-10
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            leading-relaxed
                            text-center
                            lg:text-left
                        '>

                            <li>Refreshments</li>
                            <li>Pancakes / Waffles</li>
                            <li>Savory</li>
                            <li>Little Hunger</li>

                            <Link
                                href="/contact"
                                className='
                                    mt-8
                                    flex
                                    justify-center
                                    lg:justify-start
                                    gap-4
                                    items-center
                                    text-lg
                                    sm:text-2xl
                                    lg:text-3xl
                                    text-[#DCCA87]
                                    tracking-widest
                                '
                            >
                                all menu

                                <Image
                                    loading='lazy'
                                    src={"/arrowRight.svg"}
                                    width={40}
                                    height={20}
                                    alt="arrow right"
                                    className='w-8 sm:w-10 h-auto'
                                />
                            </Link>

                        </ul>

                    </div>
                </section>

            </div>
        </>
    )
}

export default MenuPage