"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);


    const navLinks = [
        { title: "Demos", path: "#" },
        { title: "About", path: "#" },
        { title: "Support", path: "#" },
        { title: "Contact", path: "#" }
    ]

    return (
        <nav className="w-full  md:static ">
            <div className="items-center px-4 max-w-screen-2xl mx-auto md:flex md:px-6">
                <div className="flex items-center justify-between py-3 md:py-6 md:block">
                    <Link href="/">
                        <h1 className="text-xl font-bold font-poppins ">Albino.io</h1>
                    </Link>

                    <div className="md:hidden">
                        <button className="text-lightBlack outline-none p-2 rounded-full focus:border-gray-400 focus:border focus:border-purple "
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {
                                navbarOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>

                <div className={`flex-1 justify-self-center items-center px-4 mt-2 md:block md:pb-0 md:mt-0  ${navbarOpen ? 'block bg-purple/10 py-10 rounded-lg border-b-2 border-purple' : 'hidden'}`}>
                    <ul className="justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                        {
                            navLinks.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-lightBlack hover:text-purple font-semibold text-md font-poppins text-center">
                                        <Link href={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block ">
                    <Button buttonText="Get started free" showArrow={false} />
                </div>
            </div>
        </nav>
    )

}