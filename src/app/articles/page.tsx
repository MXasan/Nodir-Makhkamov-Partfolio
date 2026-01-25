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
        <Container>
            <div className="py-16 sm:py-24">
                <header className="max-w-2xl mb-16">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                        Articles
                    </h1>
                    <p className="text-base text-zinc-600">
                        Thoughts on software development, design, and building products.
                    </p>
                </header>

                <div className="flex flex-col gap-16">
                    {articles.map((article) => (
                        <article key={article.slug} className="relative flex flex-col items-start group">
                            <h2 className="text-base font-semibold tracking-tight text-zinc-800">
                                <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                                <Link href={`/articles/${article.slug}`}>
                                    <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl text-amber-950" />
                                    <span className="relative z-10">{article.title}</span>
                                </Link>
                            </h2>
                            <time
                                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-700 pl-3.5"
                                dateTime={article.date}
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                    <span className="h-4 w-0.5 rounded-full bg-zinc-900  bg-zinc-500" />
                                </span>
                                {article.date}
                            </time>
                            <p className="relative z-10 mt-2 text-sm text-zinc-900">
                                {article.description}
                            </p>
                            <div
                                aria-hidden="true"
                                className="relative z-10 flex items-center mt-4 text-sm font-medium text-cyan-500"
                            >
                                Read article
                                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-4 h-4 ml-1 stroke-current">
                                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Container>
    );
}
