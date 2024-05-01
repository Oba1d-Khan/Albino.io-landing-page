'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className="bg-secWhite py-16 lg:py-24 " >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-center gap-24 md:gap-6 md:items-center md:justify-between"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
            >

                <div className="font-poppins text-lightBlack flex flex-col items-center justify-between text-center gap-5">
                    <div className="h-auto overflow-hidden lg:w-1/12 pb-4">
                        <Image
                            src="/images/testi-01.png"
                            width={500}
                            height={500}
                            quality={100}
                            alt="img"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <h5 className=" font-bold text-xl tracking-tight">&quot;You made it so simple&quot;</h5>
                    <p className="text-sm max-w-xs px-6">
                        My new site is so much faster and easier to work with than my old
                        site.
                    </p>

                    <div>
                        <p className="font-bold py-1">Corey Valdez</p>
                        <p className="text-xs ">Founder at Zenix</p>
                    </div>
                </div>

                <div className="font-poppins text-lightBlack flex flex-col items-center justify-between text-center gap-5">
                    <div className="h-auto overflow-hidden  lg:w-1/12 pb-4">
                        <Image
                            src="/images/testi-02.png"
                            width={500}
                            height={500}
                            quality={100}
                            alt="img"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <h5 className=" font-bold text-xl  tracking-tight">&quot;Simply the best&quot;</h5>
                    <p className="text-sm max-w-xs px-6">
                        Better than all the rest. I’d recommend this product to beginners.
                    </p>

                    <div>
                        <p className="font-bold py-1">Ian Klien</p>
                        <p className="text-xs ">Digital Marketer</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Testimonials;
