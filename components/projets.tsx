'use client'

import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function Projets() {
  

    const projets = [
        {
            titre: "Portfolio",
            description: "Création de mon Portfolio avec NextJS et Shadcn UI déployé sur Vercel.",
            imageUrl: "assets/projets/projet1.png"
        },
        {
            titre: "UI/UX Design Mobile",
            description: "Création de mon Portfolio avec NextJS et Shadcn UI déployé sur Vercel.",
            imageUrl: "assets/projets/projet1.png"
        },
        {
            titre: "Supervision et contrôle à distance des postes avec VEYON",
            description: "",
            imageUrl: "assets/projets/projet2.png"
        },
        {
            titre: "Serveur d'inventaire avec GLPI",
            description: "",
            imageUrl: "assets/projets/projet3.png"
        },
        {
            titre: "Gestion de congés et d'absences",
            description: "Une application sur mesure qui permet de gérer efficacement les demandes de congés et d'absences au sein du MID",
            imageUrl: "assets/projets/projet1.png"
        },
    ]
    return (
        <section id='projets'>
            <div className='text-center mb-8'>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary mb-6">
                    Projets
                </h2>
            </div>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10'>
                {
                    projets.map((projet, index) => (
                        <Card className='max-w-md justify-self-center shadow-md' key={index}>
                            <CardContent className='space-y-4 text-sm'>
                                <Image
                                    src={projet.imageUrl}
                                    alt='Banner'
                                    className='aspect-video w-full rounded-md object-cover'
                                    width={500}
                                    height={500}
                                />
                                <p className='font-semibold text-lg'>{projet.titre}</p>
                                <p className='dark:text-gray-300'>
                                    {projet.description.length > 200 ? projet.description.slice(0, 200) + '…' : projet.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                }

            </motion.div>

        </section>
    )
}