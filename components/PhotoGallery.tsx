import Image from "next/image"

const PhotoGallery = () => {

    const photos = [
        "photo1",
        "photo2",
        "photo3",
        "photo4",
        "photo5",
        "photo6",
        "photo7",
        "photo8",
    ]

    return (
        <div className='
            w-full
            h-auto
            border-t
            border-gray-500
            px-4
            sm:px-6
            lg:px-16
            xl:px-30
            py-16
            sm:py-24
            lg:py-40
            xl:py-50
            overflow-hidden
        '>

            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-10
                lg:gap-16
            '>

                {/* Left Content */}
                <div className='
                    w-full
                    lg:w-1/2
                    space-y-5
                    flex-shrink-0
                '>

                    <h1 className='
                        font-[harmond]
                        font-semibold
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        text-center
                        lg:text-left
                    '>
                        Photo Gallery
                    </h1>

                    <p className='
                        text-sm
                        sm:text-base
                        lg:text-lg
                        text-center
                        lg:text-left
                        text-[#969493]
                        leading-relaxed
                        max-w-[700px]
                    '>
                        If you are looking for an authentic café in Zelzate, Café Regina is the right place for you! You can be inspired by the atmospheric photos on this page. This gives you a taste of what you can expect when you visit the café. So be sure to check out these photos!
                    </p>

                    {/* Arrows */}
                    <div className='
                        flex
                        items-center
                        justify-center
                        lg:justify-start
                        gap-4
                        sm:gap-6
                        lg:gap-10
                        pt-4
                    '>

                        <Image
                            loading='lazy'
                            src={`/arrowLeft.svg`}
                            width={96}
                            height={96}
                            alt="left arrow"
                            className='
                                w-10
                                sm:w-16
                                lg:w-24
                                h-auto
                                cursor-pointer
                            '
                        />

                        <Image
                            loading='lazy'
                            src={`/arrowRight.svg`}
                            width={96}
                            height={96}
                            alt="right arrow"
                            className='
                                w-10
                                sm:w-16
                                lg:w-24
                                h-auto
                                cursor-pointer
                            '
                        />

                    </div>
                </div>

                {/* Gallery */}
                <div
                    className='
                        flex
                        overflow-x-auto
                        overflow-y-hidden
                        gap-4
                        sm:gap-5
                        lg:gap-6
                        w-full
                        scrollbar-hide
                        pb-4
                    '
                    id="photoGalleryScroll"
                >

                    {
                        photos.map((photo) => (
                            <Image
                                key={photo}
                                loading='lazy'
                                src={`/suggestionImages/${photo}.avif`}
                                width={221}
                                height={328}
                                alt={photo}
                                className='
                                    flex-shrink-0
                                    w-[160px]
                                    sm:w-[190px]
                                    lg:w-[221px]
                                    h-[240px]
                                    sm:h-[280px]
                                    lg:h-[328px]
                                    object-cover
                                    rounded-xl
                                '
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default PhotoGallery