import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import { ContainerScroll } from "./ui/container-scroll-animation";

const Hero = () => {
    return (

        <section>
            <div className="flex flex-col overflow-hidden ">

                <ContainerScroll
                    titleComponent={
                        <>
                            <div className="text-center">
                                <h1 className="max-w-5xl text-2xl font-bold font-poppins leading-relaxed tracking-tighter text-lightBlack md:text-5xl lg:text-5xl lg:max-w-7xl">
                                    Get things done by <br className="hidden lg:block" />
                                    awesome remote team
                                </h1>
                                <p className="max-w-lg mx-auto mt-8 text-lg leading-snug text-lightBlack font-poppins">
                                    We share common trends and strategies for improving your rental income and making sure you stay in high demand.
                                </p>
                                <div className="flex justify-center items-center w-full max-w-2xl gap-2 mx-auto mt-4">
                                    <Button />
                                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                        <button className="items-center block px-5 lg:px-10 py-3.5 text-sm font-bold text-center text-lightBlack transition duration-500 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 lg:text-base">
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                >
                    <Image
                        src="/images/hero-img.png"
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover object-center md:h-full md:object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

        </section>
    );
};

export default Hero;
