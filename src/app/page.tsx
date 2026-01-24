import { Container } from "@/components/ui/Container";
import Image from 'next/image';
import GridBoxs from "@/components/ui/gridBoxs";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center w-full px-5 px-10 bg-background rounded-b-2xl pb-22 sm: md:">
        <div className="flex flex-col justify-between py-10 md:py-20  md:py-4 max-w-[1200px]">
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 text-zinc-100 sm:text-5xl">
          Software Engineer, Creator, and Learner.
        </h1> */}
          <div className="flex items-center justify-between gap-10 container-width lg:gap-20 max-sm:flex-col ">
            <img className="w-[250] md:w-[300] lg:w-[400px] h-full" src="face.png" alt="Nodir Makhkamov" />
            <div className="flex flex-col items-center sm:justify-start sm:items-start">
              <div className="flex items-center gap-2 font-serif text-2xl font-bold max-sm:mb-5 md:text-3xl lg:text-5xl xl:text-7xl">
                <p>Hey Friends</p>
                <img
                  src="/variant=3.svg"
                  alt="underline"
                  className="w-10 mx-4 md:w-14 "
                />
              </div>
              <p className="max-w-2xl text-2xl max-sm:item-center base text- md:mt-3 lg:mt-6 lg:text-2xl xl:text-4xl text-zinc-900 ">
                I’m Nodir. I’m a Software Engineer turned Entrepreneur.
                <span className="text-bold">Welcome to my digital garden where I share my projects and thoughts.</span>
              </p>
            </div>
          </div>

          {/* <div className="flex gap-6 mt-10">
            <Link
              href="/contact"
              className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900  bg-zinc-100  text-zinc-900  hover:bg-zinc-300"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors text-zinc-900 text-zinc-100 hover:text-cyan-600 hover:text-cyan-400"
            >
              View Projects <span aria-hidden="true">→</span>
            </Link>
          </div> */}
        </div>

        {/* <div className="py-10 border-t border-zinc-100 border-zinc-800">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900 text-zinc-100">Recent Work</h2>
          <p className="text-zinc-500 text-zinc-400">
            I&apos;ve worked on various projects ranging from web apps to backend systems. Check out the <Link href="/projects" className="underline text-cyan-600 hover:text-cyan-500 decoration-cyan-500/30 underline-offset-4">projects page</Link> to see what I&apos;ve been working on.
          </p>
        </div> */}

      </div >
      <GridBoxs />
    </Container >
  );
}
