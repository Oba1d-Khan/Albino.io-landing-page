"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Content_02 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 ">
                <div className="flex w-full mx-auto text-left ">
                    <div className="relative inline-flex items-center mx-auto align-middle ">
                        <div className="text-center">
                            <h1 className="max-w-5xl text-2xl font-bold font-poppins leading-relaxed tracking-tighter text-lightBlack md:text-5xl lg:text-4xl lg:max-w-7xl">
                                Manage your projects fast
                            </h1>
                            <p className="max-w-lg mx-auto mt-8 text-md leading-snug text-lightBlack font-poppins">
                                With lots of unique blocks, you can easily build a page without
                                coding. Build your next landing page.
                            </p>

                            <div className=" py-8 lg:py-20 my-10">
                                <div className="mx-auto max-w-md lg:max-w-7xl px-4 md:px-10">
                                    <div className="flex flex-col justify-between md:justify-between md:items-center gap-16 sm:gap-10 md:gap-16 lg:flex-row">
                                        <div
                                            className="h-auto overflow-hidden md:w-full md:h-full lg:w-5/12 "
                                            data-aos="fade-down-right"
                                        >
                                            <Image
                                                src="/images/content-02-img.png"
                                                loading="lazy"
                                                alt="section-image"
                                                className="h-full w-full object-cover object-center"
                                                width={1000}
                                                height={1000}
                                                quality={100}
                                            />
                                        </div>

                                        <div
                                            className="grid grid-cols-1 gap-6 md:grid-rows-3 md:gap-16"
                                            data-aos="fade-down-left"
                                        >
                                            <div className="flex gap-4 items-start">
                                                <div className="px-4 py-[0.4rem] rounded-full bg-purple/20 text-purple text-lg font-rubik">
                                                    1
                                                </div>

                                                <div className="flex flex-col gap-2 text-start max-w-xs font-poppins text-lightBlack ">
                                                    <h5 className="text-xl font-bold tracking-tight">
                                                        Create a project
                                                    </h5>
                                                    <p className="">
                                                        With lots of unique blocks, you can easily build a
                                                        page without coding.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 items-start">
                                                <div className="px-4 py-[0.4rem] rounded-full bg-purple/20 text-purple text-lg font-rubik">
                                                    2
                                                </div>

                                                <div className="flex flex-col gap-2 text-start max-w-xs font-poppins text-lightBlack ">
                                                    <h5 className="text-xl font-bold tracking-tight">
                                                        Assign related people
                                                    </h5>
                                                    <p className="">
                                                        With lots of unique blocks, you can easily build a
                                                        page without coding.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 items-start">
                                                <div className="px-4 py-[0.4rem] rounded-full bg-purple/20 text-purple text-lg font-rubik">
                                                    3
                                                </div>

                                                <div className="flex flex-col gap-2 text-start max-w-xs font-poppins text-lightBlack ">
                                                    <h5 className="text-xl font-bold tracking-tight">
                                                        Make it done on-time
                                                    </h5>
                                                    <p className="">
                                                        With lots of unique blocks, you can easily build a
                                                        page without coding.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content_02;
