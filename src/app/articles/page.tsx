import { Container } from "@/components/ui/Container";
import { getArticles } from "@/lib/articles";
import Link from "next/link";



export const metadata = {
    title: 'Articles | Nodir Makhkamov',
    description: 'Writing on software engineering, technology, and more.',
};

export default async function Articles() {
    const articles = await getArticles();

    return (
        <Container className="flex justify-center items-center">
            <div className="py-16 container-width sm:py-24">
                <h1 className="mb-6 text-4xl font-bold font-Gravi tracking-tight text-zinc-800 sm:text-5xl">
                    All Recent Articles
                </h1>

                <div className="grid gap-15 grid-cols-2">
                    {articles.map((article) => (
                        // <article key={article.slug} className="flex flex-col items-start realative group">
                        //     <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                        //         <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 hover:scale-100 group-hover::opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                        //         <Link href={`/articles/${article.slug}`}>
                        //             <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl text-amber-950" />
                        //             <span className="relative z-10">{article.title}</span>
                        //         </Link>
                        //     </h2>
                        //     <time
                        //         className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-700 pl-3.5"
                        //         dateTime={article.date}
                        //     >
                        //         <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                        //             <span className="h-4 w-0.5 rounded-full bg-zinc-900  bg-zinc-500" />
                        //         </span>
                        //         {article.date}
                        //     </time>
                        //     <p className="relative z-10 mt-2 text-sm text-zinc-900">
                        //         {article.description}
                        //     </p>
                        //     <div
                        //         aria-hidden="true"
                        //         className="relative z-10 flex items-center mt-4 text-sm font-medium text-cyan-500"
                        //     >
                        //         Read article
                        //         <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-4 h-4 ml-1 stroke-current">
                        //             <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        //         </svg>
                        //     </div>
                        // </article>
                        <article key={article.slug} className="flex item-center bg-background h-[600px] rounded-2xl">
                            <Link className="" href={`/articles/${article.slug}`}>
                                <img className="w-100" src="images.jpeg" alt="" />
                                <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                                    <div className="z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 hover:scale-100 group-hover::opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                    <span className="z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl text-amber-950" />
                                    <span className="z-10">{article.title}</span>
                                </h2>
                                <time
                                    className="flex items-center text-sm text-zinc-700"
                                    dateTime={article.date}
                                >
                                    {article.date}
                                </time>
                                <p className=" z-10 mt-2 text-sm text-zinc-900">
                                    {article.description}
                                </p>
                                <div
                                    aria-hidden="true"
                                    className="flex items-center mt-4 text-sm font-medium text-cyan-500"
                                >
                                    Continue reading
                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-4 h-4 ml-1 stroke-current">
                                        <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </Container >
    );
}
