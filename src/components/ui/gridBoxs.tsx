import React from "react";
import Link from "next/link";


const GridLayout: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-28">
            <div className="grid md:grid-cols-2 grid-rows-5 gap-10 lg:gap-15 w-[1200px] md:h-[1400px] mb-22">
                <div className="h-12">
                    <p className="flex justify-self-start items-start flex-col font-def  text-[60px] lg:text-[70px]">
                        How Can
                        <span className="flex inline-block font-bold font-Gravi ">
                            I Help
                            <span className="bg-[url('/variant=6.svg')] bg-cover bg-center w-full h-85 ">
                                You?
                            </span>
                        </span>
                    </p>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=13.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="text-4xl font-bold font-Gravi">Grow a YouTube Chanel</p>
                    <p className="text-xl font-medium">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 hover:text-cyan-600  hover:text-cyan-400"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=9.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="text-4xl font-bold font-Gravi">Grow a YouTube Chanel</p>
                    <p className="text-xl font-medium">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 hover:text-cyan-600  hover:text-cyan-400"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=15.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="text-4xl font-bold font-Gravi">Grow a YouTube Chanel</p>
                    <p className="text-xl font-medium">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 hover:text-cyan-600  hover:text-cyan-400"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="row-span-2 box-puzzel">
                    <img
                        src="/variant=11.svg"
                        alt="youtube Nodir Makhkamov"
                    />
                    <p className="text-4xl font-bold font-Gravi">Grow a YouTube Chanel</p>
                    <p className="text-xl font-medium">Learn how to start and grow a life-changing
                        YouTube channel based on my years of
                        experience.
                    </p>
                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 hover:text-cyan-600  hover:text-cyan-400"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="flex flex-col items-center justify-center row-span-3 box-puzzel">
                    <p className="text-5xl font-bold font-Gravi">...and more!</p>

                    <Link
                        href="/projects"
                        className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 hover:text-cyan-600  hover:text-cyan-400"
                    >
                        View Projects <span aria-hidden="true">→</span>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default GridLayout;
