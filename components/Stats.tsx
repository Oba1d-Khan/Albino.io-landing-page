const Stats = () => {
    const stats = [
        {
            data: "1M+",
            desc: "Customer visit Albino every months",
        },
        {
            data: "93%",
            desc: "Satisfaction rate from our customers",
        },
        {
            data: "4.9",
            desc: "Average customer ratings out of 5.0! ",
        },
    ];

    return (
        <section className="py-16 border-b border-gray/40 my-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {stats.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-6 text-center">
                            <h4 className="text-5xl tracking-tighter text-lightBlack font-bold font-poppins">
                                {item.data}
                            </h4>
                            <p className=" font-poppins max-w-[10rem] text-start">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Stats;
