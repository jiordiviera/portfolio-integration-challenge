import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="about" className="bg-foreground">
        <div className="container mx-auto px-4 py-8 lg:py-16">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">I'm Jiordi Viera</h1>
                    <p className="text-gray-400 mb-8">
                        Hello! Let's create something that is both visually compelling
                        and functionally effective. With my skills and your vision,
                        together we can make digital magic happen.
                    </p>
                    <Link
                        to="/get-in-touch"
                        className="inline-block bg-primary text-background px-6 lg:px-8 py-3 rounded-md hover:bg-primary/80 transition"
                    >
                        Let's get started
                    </Link>
                </div>
                <div className="size-48 lg:size-80 rounded-full overflow-hidden">
                    <img
                        src="/me.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-12 lg:mt-16">
                <h2 className="text-xl lg:text-2xl mb-6 lg:mb-8 text-center lg:text-left">Worked with</h2>
                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-6 lg:gap-8 items-center opacity-50">
                    <img src="/me.png" alt="Client 1" className="w-24" />
                    <img src="/me.png" alt="Client 2" className="w-24" />
                    <img src="/me.png" alt="Client 3" className="w-24" />
                    <img src="/me.png" alt="Client 4" className="w-24" />
                </div>
            </div>
            </div>
        </section>
    )
}
