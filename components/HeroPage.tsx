"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroPage = () => {

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isMobile:  "(max-width: 639px)",
                isTablet:  "(min-width: 640px) and (max-width: 1023px)",
                isDesktop: "(min-width: 1024px)",
            },
            (context) => {
                const { isMobile, isTablet } = context.conditions!;

                /* ── Responsive values ───────────────────────────── */
                const taglineScale  = isMobile ? 1.6  : isTablet ? 2.2  : 2.8;
                const taglineY      = isMobile ? -40  : isTablet ? -70  : -100;
                const imageScale    = isMobile ? 2.0  : isTablet ? 2.8  : 3.5;
                // vw strings keep exit distance proportional on every screen
                const exitX         = isMobile ? "55vw" : isTablet ? "58vw" : "45vw";
                const entranceX     = isMobile ? "8vw"  : "7vw";

                /* ── Scroll-pinned master timeline ───────────────── */
                const masterTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".heroSection",
                        start: "top top",
                        end: "+=150%",
                        scrub: 5,
                        pin: true,
                        anticipatePin: 20,
                        markers: false,
                    },
                });

                // Tagline blooms and fades
                const tl = gsap.timeline();
                tl.fromTo(
                    "#MainTagLine",
                    { scale: 1, opacity: 1, y: 0 },
                    {
                        opacity: 0,
                        scale: taglineScale,
                        y: taglineY,
                        transformOrigin: "center center",
                        ease: "power2.in",
                        duration: 1,
                    }
                );

                // Side columns slide off screen
                const t2 = gsap.timeline();
                t2.fromTo(
                    "#leftDiv",
                    { opacity: 1, x: 0 },
                    {
                        opacity: 0,
                        x: `-${exitX}`,
                        rotation: -5,
                        ease: "power3.inOut",
                        duration: 1,
                    }
                ).fromTo(
                    "#rightDiv",
                    { opacity: 1, x: 0 },
                    {
                        opacity: 0,
                        x: exitX,
                        rotation: 5,
                        ease: "power3.inOut",
                        duration: 1,
                    },
                    "<"   // same start as leftDiv
                );

                // Center image zooms & blurs out
                const t3 = gsap.timeline();
                t3.fromTo(
                    "#MainImage",
                    { opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" },
                    {
                        opacity: 0,
                        scale: imageScale,
                        filter: "brightness(1.2) blur(8px)",
                        ease: "power2.inOut",
                        duration: 1,
                    }
                );

                masterTimeline.add(tl, 0).add(t3, 0).add(t2, 0);

                /* ── Entrance animations (run once on load) ──────── */
                gsap.from("#MainTagLine", {
                    opacity: 0,
                    y: 50,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.3,
                });

                gsap.from("#MainImage", {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.5,
                    ease: "power3.out",
                });

                gsap.from("#leftDiv", {
                    opacity: 0,
                    x: `-${entranceX}`,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: 0.2,
                });

                gsap.from("#rightDiv", {
                    opacity: 0,
                    x: entranceX,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: 0.2,
                });

                // Clean up on breakpoint change
                return () => {
                    ScrollTrigger.getAll().forEach((t) => t.kill());
                };
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <>
            <section className='w-full h-screen overflow-hidden heroSection relative'>
                <Image
                    loading='lazy'
                    src={"/Background.svg"}
                    alt='cafe interior'
                    width={100}
                    height={100}
                    className='object-cover w-full h-full absolute'
                />

                <div className='max-w-[1440px] mx-auto top-0 py-[clamp(2rem,6vw,8rem)]'>
                    <div className='relative top-[clamp(0.5rem,2vw,2.5rem)] text-center flex items-center justify-between px-[clamp(0.5rem,2vw,2rem)]'>

                        <h1
                            id='MainTagLine'
                            className='font-[harmond] font-semibold absolute text-[clamp(2.5rem,11vw,11.25rem)] z-10 tracking-normal text-white mix-blend-difference leading-[1.1] w-full left-0'
                        >
                            Geniet Van Een Gezellige Tijd Bij <br className='md:block hidden' /> Café Regina
                        </h1>

                        <div id='leftDiv' className='h-[95vh] flex flex-col items-center justify-around lg:justify-between flex-1 min-w-0'>
                            <h1 className='text-[clamp(1.5rem,5vw,4.5rem)] font-[harmond] font-bold'>
                                <span className='flex items-center gap-[clamp(0.25rem,1vw,1rem)]'>
                                    CAFE
                                    <hr className='w-[clamp(2rem,8vw,10rem)]' />
                                </span>
                                <div className='gap-[clamp(0.25rem,1vw,1rem)] flex items-start'>
                                    REGINA
                                    <div className='text-[clamp(0.6rem,1.2vw,1.5rem)] leading-tight'>
                                        GROTE MARKT 15, <br />
                                        9060 ZELZATE
                                    </div>
                                </div>
                            </h1>
                            <Image
                                loading='lazy'
                                src={"/bevrage.svg"}
                                alt='cafe interior'
                                width={100}
                                height={100}
                                className='object-contain w-[clamp(100px,17vw,269px)] h-[clamp(150px,25vw,402px)]'
                            />
                        </div>

                        <div className='w-[clamp(180px,38vw,586px)] h-[clamp(270px,57vw,886px)] relative shrink-0'>
                            <Image
                                id='MainImage'
                                loading='lazy'
                                src={"/cafe-bar.svg"}
                                alt='cafe interior'
                                width={100}
                                height={100}
                                className='object-fill w-full h-full'
                            />
                        </div>

                        <div id='rightDiv' className='h-[95vh] flex flex-col items-center justify-around lg:justify-between flex-1 min-w-0'>
                            <Image
                                loading='lazy'
                                src={"/wine.svg"}
                                alt='cafe interior'
                                width={100}
                                height={100}
                                className='object-contain w-[clamp(100px,17vw,269px)] h-[clamp(150px,25vw,402px)]'
                            />
                            <div className='w-full flex flex-col items-center space-y-[clamp(1rem,5vw,5rem)]'>
                                <p className='w-[clamp(120px,15vw,213px)] text-[clamp(0.6rem,1vw,1rem)] text-start text-[#969493]'>
                                    Café Regina is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time!
                                </p>
                                <Link
                                    href="/contact"
                                    className="flex gap-[clamp(0.5rem,2vw,1.5rem)] items-center text-[clamp(0.8rem,2vw,1.875rem)] text-[#DCCA87] tracking-widest"
                                >
                                    CONTACT
                                    <Image
                                        loading='lazy'
                                        src={"/arrowRight.svg"}
                                        width={100}
                                        height={50}
                                        alt="arrow right"
                                        className='w-[clamp(20px,4vw,60px)] h-auto'
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroPage