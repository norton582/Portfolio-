"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { CoolMode } from "./ui/cool-mode";
import {motion} from "framer-motion";

export function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            const scrollPostition = window.scrollY;
            setIsScrolled(scrollPostition > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const navLinks = [
        { name: "Accueil", href: "#accueil" },
        { name: "Parcours", href: "#parcours" },
        { name: "Projets", href: "#projets" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ]
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        className={isScrolled ?" fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out bg-white/30 backdrop-blur-lg shadow-md dark:bg-black/90" : "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out"}>
            <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-4">
                {/*logo*/}
                
                <motion.a 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                href="#" className="text-2xl md:text-3xl font-bold tracking-tighter mr-8">
                    <CoolMode>
                        Norton R<span className="text-primary text-3xl">.</span>
                    </CoolMode> 
                </motion.a>
                {/*logo*/}

                {/*Nav Links */}
                <div className="hidden min-[825px]:flex items-center gap-6 bg-gray-100 shadow-md dark:bg-black dark:border-input dark:hover:bg-input/60 px-8 py-3 rounded-b-full">
                    {navLinks.map((link, index) => (
                        <motion.a 
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        href={link.href} key={index}
                            className="text-content dark:text-white text-[15px] font-bold hover:text-green-500 transition-all duration-300 ease-in-out"
                        >{link.name}</motion.a>
                    ))}
                </div>
                {/*Nav Links */}

                <a href="#contact" className="hidden min-[825px]:flex w-30">
                    <Button variant="default" size="sm" className="w-full dark:text-white rounded-sm hover:opacity-90 transition-opacity duration-400">
                        Me contacter
                    </Button>
                </a>
                {/*Mobile Menu Button */}
                <button className="min-[825px]:hidden pt-2 text-gray-700 hover:text-gray-900"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        
                        <div>
                            <X className="text-2xl dark:text-white" />
                        </div>
                    ) : (
                        <div>
                            <Menu className="text-2xl dark:text-white" />
                        </div>
                    )
                    }
                </button>
               
            </nav>

            {
                isMenuOpen && (
                
                    <div className="min-[825px]:hidden fixed w-full top-[80px] z-40">
                        <div className="bg-white shadow-lg rounded-2xl mx-4 mt-2 p-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <Link href={link.href} key={index}
                                        className="text-content text-[18px] border-b border-gray-100 font-bold hover:text-content-alter transition-all duration-300 ease-in-out"
                                        onClick={closeMenu}
                                    >{link.name}</Link>
                                ))}
                            </div>
                            <a href="#contact" className="min-[825px]:hidden flex w-full mt-4 md:w-40">
                                <Button onClick={closeMenu} variant="default" size="lg" className="w-full dark:text-gray-100 rounded-full hover:opacity-90 transition-opacity duration-400">
                                    Me contacter
                                </Button>
                            </a>
                        </div>
                    </div>
                  
                )
            }
            
        </motion.header>
    );
}