'use client'
import Button from "./Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const CTA = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section className="container mx-auto py-20" id="contact"
        >
            <div data-aos="fade-down">
                <div className="flex flex-col text-center gap-6 lg:text-start lg:flex-row justify-between items-center"
                >

                    <div className=" "
                    >
                        <h3 className="max-w-5xl text-2xl font-bold font-poppins leading-relaxed tracking-tighter text-lightBlack md:text-5xl lg:text-4xl lg:max-w-7xl">
                            Build better landing page fast
                        </h3>
                        <p className="max-w-lg mx-auto mt-6 text-md leading-snug text-lightBlack font-poppins">
                            With lots of unique blocks, you can easily build a page without
                            coding. Build your next landing page.
                        </p>
                    </div>

                    <div className="flex gap-4"
                    >
                        <Button buttonText="Learn more" bgColor="bg-purple/10" textColor="text-purple" />
                        <Button buttonText="Get it now" />
                    </div>
                </div>

            </div>
        </section >
    );
};

export default CTA;
