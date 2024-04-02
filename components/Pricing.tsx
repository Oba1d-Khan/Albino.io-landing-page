import Image from "next/image";
import Button from "./Button";

const Pricing = () => {
    const data = [
        {
            heading: "Can I use Albino for my clients?",
            desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        },
        {
            heading: "Does it work with WordPress?",
            desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        },
        {
            heading: "Do I get free updates?",
            desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        },
        {
            heading: "Will you provide support?",
            desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        },
    ];
    return (
        <section className="bg-lightBlack ">
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 ">
                <div className="flex w-full mx-auto text-left ">
                    <div className="relative inline-flex items-center mx-auto align-middle ">
                        <div className="text-center">
                            <h1 className="max-w-5xl text-2xl font-bold font-poppins leading-relaxed tracking-tighter text-white md:text-5xl lg:text-4xl lg:max-w-7xl">
                                Pricing & Plans
                            </h1>
                            <p className="max-w-lg mx-auto mt-8 text-md leading-snug text-white font-poppins">
                                With lots of unique blocks, you can easily build a page without
                                coding. Build your next landing page.
                            </p>

                            <div className=" py-16 lg:py-22 ">
                                <div className="mx-auto max-w-md lg:max-w-7xl ">
                                    <div className="flex flex-col justify-between md:justify-between md:items-center gap-16 sm:gap-10 md:gap-16 lg:gap-24">
                                        {/* 0----- */}

                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 px-4">
                                            <div className="bg-white flex flex-col gap-4 items-center justify-between p-4 font-poppins rounded-lg">
                                                <p className="uppercase py-2 my-4 px-4 text-purple bg-purple/10 rounded-full font-bold text-xs">
                                                    basic
                                                </p>

                                                <h4 className="text-5xl tracking-tighter text-lightBlack font-bold font-poppins">
                                                    $29
                                                </h4>

                                                <p className="text-md">One time purchase</p>
                                                <p className="text-md py-6 px-2">
                                                    With lots of unique blocks, you can easily build a
                                                    page without coding. Build your next landing page.
                                                </p>
                                                <Button showArrow={false} />
                                            </div>

                                            <div className="bg-white flex flex-col gap-4 items-center justify-between p-4 font-poppins rounded-lg">
                                                <p className="uppercase py-2 my-4 px-4 text-purple bg-purple/10 rounded-full font-bold text-xs">
                                                    standard
                                                </p>

                                                <h4 className="text-5xl tracking-tighter text-lightBlack font-bold font-poppins">
                                                    $49
                                                </h4>

                                                <p className="text-md">One time purchase</p>
                                                <p className="text-md py-6 px-2">
                                                    With lots of unique blocks, you can easily build a
                                                    page without coding. Build your next landing page.
                                                </p>
                                                <Button showArrow={false} />
                                            </div>

                                            <div className="bg-white flex flex-col gap-4 items-center justify-between p-4 font-poppins rounded-lg">
                                                <p className="uppercase py-2 my-4 px-4 text-purple bg-purple/10 rounded-full font-bold text-xs">
                                                    premium
                                                </p>

                                                <h4 className="text-5xl tracking-tighter text-lightBlack font-bold font-poppins">
                                                    $99
                                                </h4>

                                                <p className="text-md">One time purchase</p>
                                                <p className="text-md py-6 px-2">
                                                    With lots of unique blocks, you can easily build a
                                                    page without coding. Build your next landing page.
                                                </p>
                                                <Button showArrow={false} />
                                            </div>
                                        </div>

                                        {/* -- */}
                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20 ">
                                            {data.map((item) => (
                                                <div
                                                    className="flex gap-4 items-start py-4"
                                                    key={item.heading}
                                                >
                                                    <div className="px-4 py-[0.4rem] rounded-full bg-green text-white text-lg font-rubik">
                                                        ?
                                                    </div>

                                                    <div className="flex flex-col gap-4 text-start max-w-sm font-poppins text-white ">
                                                        <h5 className="text-lg font-bold">
                                                            {item.heading}
                                                        </h5>
                                                        <p className="text-sm leading-6 font-light">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <h5 className="font-poppins text-sm text-white">
                                            Haven&apos;t got your answer?{" "}
                                            <span className="text-green cursor-pointer">
                                                Contact our support now
                                            </span>
                                        </h5>
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

export default Pricing;
