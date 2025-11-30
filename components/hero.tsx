"use client";
import { motion } from "framer-motion";
import { BriefcaseBusiness, FileDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { TypingAnimation } from "./ui/typing-animation";

export function Hero(){

    const icons = [
      
       {name : "assets/tech/html.jpg"},
       {name : "assets/tech/css.jpg"},
       {name : "assets/tech/nextjs.jpg"},
       {name : "assets/tech/django.jpg"},
       {name : "assets/tech/git.jpg"},
       {name : "assets/tech/figma.png"},
       {name : "assets/tech/ps.jpg"},
       {name : "assets/tech/pfsense.png"},
       {name : "assets/tech/glpi.png"},
       {name : "assets/tech/veyon.png"},
    ]
    return(
        <section id="accueil">
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {opacity:0, y:50},
                    show: {opacity:1, y:0, transition:{duration:0.6, ease:"easeInOut"}}
                }}
            className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 overflow-hidden">
                {/* Mon Profile */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {opacity:0, y:50},
                        show: {opacity:1, y:0, transition:{duration:0.6, ease:"easeIn"}}
                    }}
                >
                    <Image src="/assets/Profile.jpg" alt="Norton" width={250} height={250} className="rounded-full mb-4"/>
                </motion.div>
                {/*Description */}
                <TypingAnimation className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
                    Je suis Norton RAKOTOVAO 👋
                </TypingAnimation>
                <AnimatedGradientText
                    speed={0.8}
                    colorFrom="#ee471eff"
                    colorTo="#e229e9ff"
                    className="text-3xl md:text-5xl font-semibold mt-2 dark:text-gray-200 font-semibold tracking-tight"
                    >
                    Technicien Informatique & Web Designer/Developpeur Web.
                </AnimatedGradientText>
               
                {/*List Icons */}
                <div className="relative my-6 md:my-8 overflow-hidden">
                    <motion.div className="flex gap-10 w-max"
                        animate={{x:["0%", "-50%"]}}
                        transition={{
                            repeat:Infinity,
                            repeatType:"loop",
                            duration : 20,
                            ease:"linear"
                        }}
                    >
                        {
                            icons.map((icon, index) => (
                                <Image src={icon.name} key={index} width={40} height={40} alt="Technologie" className="md:w-[50px] md:h-[50px]"/>
                            ))
                        }
                    </motion.div>
                </div>
                {/*Buttons */}
                <div className="flex flex-col md:flex-row items-center md:w-auto gap-4 w-full mt-4">
                    <a href="#projets" className="w-full md:w-40">
                        <Button variant="default" size="lg" className="w-full rounded-full dark:text-white hover:opacity-90 transition-opacity duration-400">
                            Mes Projets <BriefcaseBusiness className="text-2xl dark:text-white"/>
                        </Button>
                    </a>
                    <a href="/assets/cv.pdf" download className="w-full md:w-40">
                        <Button variant="outline" size="lg" className="w-full rounded-full hover:opacity-90 transition-opacity duration-400">
                            Mon CV <FileDown className="text-2xl" />
                        </Button>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}