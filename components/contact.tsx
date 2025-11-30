"use client";
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import { Button } from "./ui/button";
import { useState, FormEvent } from "react";

export function Contact() {

    const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "02e798ab-8530-4fb5-982b-d1b2ac73d98e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message envoyé avec succès!");
      event.currentTarget.reset();
    } else {
      setResult("Error");
    }
  };
    return (
        <section id="contact" className="my-20">
            <div className='text-center mb-8'>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary mb-6">
                    Me Contacter
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
                <Terminal>
                    <TypingAnimation>N'hesiter pas à me contacter!</TypingAnimation>
                    <AnimatedSpan>✔ .....10%</AnimatedSpan>
                    <AnimatedSpan>✔ ...............80%</AnimatedSpan>
                    <AnimatedSpan>✔ ......................100%</AnimatedSpan>
                    <TypingAnimation>Message envoyé avec succés.</TypingAnimation>
                </Terminal>
                <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 px-4">

                    <input type="text" name="name" placeholder="Votre Nom" className="border border-gray-200 bg-white dark:bg-black dark:border-input px-4 py-3 rounded-md" required />
                    <input type="email" name="email" placeholder="Votre adresse mail" className="border border-gray-200 dark:bg-black dark:border-input bg-white px-4 py-3 rounded-md" required />
                    <input type="text" name="société" placeholder="Société" className="border border-gray-200 bg-white dark:bg-black dark:border-input px-4 py-3 rounded-md" required />
                    <textarea name="message" id="" placeholder="Messages..." className="border border-gray-200 bg-white dark:bg-black dark:border-input px-4 py-3 rounded-md" required></textarea>
                    <div>
                        <Button type="submit" className="py-3 dark:text-gray-200">Envoyer</Button>
                    </div>
                    <span>{result}</span>
                </form>
                
            </div>
        </section>
    );
}