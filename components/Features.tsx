'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div id="features">
            <div className="py-2 container mx-auto" >

                <div className="md:mx-16 mt-16 lg:mt-2 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-3"
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-bottom"
                >

                    <div
                        className="group relative p-8 rounded-3xl dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-lg shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <Image
                                src="/images/code-img.png"
                                className="w-10"
                                width={500}
                                height={500}
                                alt="icon"
                            />
                            <h3 className="mt-8 mb-4 text-2xl font-bold text-lightBlack transition dark:text-white">
                                Project management
                            </h3>
                            <p className="pt-3 text-lightBlack dark:text-gray-300">
                                With lots of unique blocks, you can easily build a page
                                without coding. Build your next landing page.
                            </p>
                        </div>
                    </div>

                    <div
                        className="group relative p-8 rounded-3xl dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-lg shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <Image
                                src="/images/time-img.png"
                                className="w-10"
                                width={500}
                                height={500}
                                alt="icon"
                            />
                            <h3 className="mt-8 mb-4 text-2xl font-bold text-lightBlack transition dark:text-white">
                                Time tracking{" "}
                            </h3>
                            <p className="pt-3 text-lightBlack dark:text-gray-300">
                                With lots of unique blocks, you can easily build a page
                                without coding. Build your next landing page.
                            </p>
                        </div>
                    </div>

                    <div
                        className="group relative p-8 rounded-3xl dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent  lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-lg shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <Image
                                src="/images/mobile-img.png"
                                className="w-7"
                                width={500}
                                height={500}
                                alt="icon"
                            />
                            <h3 className="mt-8 mb-4 text-2xl font-bold text-lightBlack transition dark:text-white">
                                Beautiful mobile app
                            </h3>
                            <p className="pt-3 text-lightBlack dark:text-gray-300">
                                With lots of unique blocks, you can easily build a page
                                without coding. Build your next landing page.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;
