import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="bg-foreground">
        <header className="container mx-auto px-4 py-6 bg-[#1B1B1B]">
            <nav className="flex flex-row items-center justify-between">
                <Button
                    variant={"outline"}
                    className="lg:hidden text-2xl cursor-pointer size-8"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>

                <ul className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-4 lg:gap-8`}>
                    <li><Link to="/" className="hover:text-green-500 transition text-background">Home</Link></li>
                    <li><Link to="/case-studies" className="hover:text-green-500 transition text-background">Case Studies</Link></li>
                    <li><Link to="/testimonials" className="hover:text-green-500 transition text-background">Testimonials</Link></li>
                    <li><Link to="/recent-work" className="hover:text-green-500 transition text-background">Recent Work</Link></li>
                    <li><Link to="/get-in-touch" className="hover:text-green-500 transition text-background">Get In Touch</Link></li>
                </ul>

                <div className={'flex lg:flex gap-6 mt-4 lg:mt-0'}>
                    <a href="https://github.com/jiordiviera" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition text-background">
                        <Github size={20} />
                    </a>
                    <a href="https://twitter.com/jiordiviera" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition text-background">
                        <Twitter size={20} />
                    </a>
                    <a href="https://linkedin.com/in/jiordiviera" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition text-background">
                        <Linkedin size={20} />
                    </a>
                </div>
            </nav>
        </header>
        </section>
    );
}
