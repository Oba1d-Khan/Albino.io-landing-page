'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";

const Content_01 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section>
            <div className="bg-secWhite py-16 lg:py-20 my-10" >

                <div className="mx-auto max-w-md lg:max-w-screen-xl px-4 md:px-10">
                    <div className="flex flex-col justify-between md:justify-around md:items-center gap-16 sm:gap-10 md:gap-16 lg:flex-row">


                        <div data-aos="fade-down-right"
                            className="flex flex-col justify-center items-center lg:items-start text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24 lg:max-w-md">
                            <h1 className="mb-8 text-3xl font-bold text-lightBlack md:mb-4 md:text-4xl tracking-tighter font-poppins">
                                Getting started with <br /> Albino is easier than <br /> ever
                            </h1>

                            <p className="mb-8 leading-relaxed text-lightBlack md:mb-6 lg:w-11/12 xl:text-lg font-poppins ">
                                With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
                            </p>

                            <Button />
                        </div>

                        <div data-aos="fade-down-left"
                            className="h-auto overflow-hidden md:w-full md:h-full lg:w-4/12 ">
                            <Image
                                src="/images/content-01-img.png"
                                loading="lazy"
                                alt="section-image"
                                className="h-full w-full object-cover object-center"
                                width={1000}
                                height={1000}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content_01;
