import { BriefcaseBusiness } from "lucide-react";
import { HackathonCard } from "./hackathon-card";

export function Parcours() {

    const FormationsData = [
        {
            annee : "09 Décembre 2023 - 13 Janvier 2024",
            titre : "Maintenance et réseau informatique",
            etablissement : "Nir'Info, Antananarivo",
            description : undefined,
        },
        {
            annee : "2022 - 2023",
            titre : "Master II en Informatique et Télécommunications",
            etablissement : "Institut Supérieur Polytechnique de Madagascar (ISPM)",
            description : undefined,
        },
        {
            annee : "2020 - 2021",
            titre : "Licence en Informatique et Télécommunications",
            etablissement : "Institut Supérieur Polytechnique de Madagascar (ISPM)",
            description : undefined,
        },
        {
            annee : "2017 - 2018",
            titre : "Bacalauréat Série D",
            etablissement : "Lycée Philibert Tsiranana, Mahajanga",
            description : undefined,
        },
    ]

    const ExperiencesData = [
        {
            annee : "Janvier 2025 – Aujourd’hui",
            titre : "Technicien Informatique",
            etablissement : "Institut Supérieur Polytechnique de Madagascar (ISPM)",
            description : ""
        },
        {
            annee : "Août 2024 – Septembre 2025",
            titre : "Stage de mémoire (Master II) ",
            etablissement : "Institut Supérieur Polytechnique de Madagascar (ISPM)",
            description : "Conception, élaboration d’infrastructure réseau pour l’ISPM et mise en place d’un portail captif avec PfSense. Mise en place de logiciel d’inventaire avec GLPI. Mise en place d’outil de supervision et contrôle des machines à distance avec Veyon"
       
        },
        {
            annee : "Janvier 2024 - Août 2024",
            titre : "Développeur web",
            etablissement : "Masovia Madagascar",
            description : "Création de site web « Masovia »"
       
        },
        {
            annee : "2020 - 2021",
            titre : "Stage de mémoire (Licence)",
            etablissement : "Ministère de lʼintérieur de Madagascar",
            description : "Conception d’une application web « Gestion de congés et d’absences » avec Django."
       
        },
    ]
    return(
        <section className="mt-10 pb-8" id="parcours">
            <div className="text-center">
                <p className="text-content font-semibold inline-flex dark:text-gray-300 dark:border-gray-700 items-center gap-1 border-1 px-6 py-4 border-content/20 rounded-full mb-2">
                    <BriefcaseBusiness className="text-xl"/> Mon parcours
                </p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary mb-6">
                    Expériences & Formations
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-content dark:text-gray-400 tracking-tighter">Formations</h3>
                    <div>
                        <div className="space-y-12 w-full py-8">
                            
                            <ul className="ml-4 divide-y divide-dashed border-l">
                            {FormationsData.map((item, index) => (
                                
                                <HackathonCard
                                    titre={item.titre}
                                    date={item.annee}
                                    etablissement={item.etablissement}
                                    description={item.description}
                                    key={index}
                                />
                    
                            ))}
                            </ul>
                    
                        </div>
                    </div>
                </div>
                            
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-content dark:text-gray-400 tracking-tighter">Expérience Professionnelles</h3>
                    <div>
                        <div className="space-y-12 w-full py-8">
                            
                            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {ExperiencesData.map((item, index) => (
                                
                                <HackathonCard
                                    titre={item.titre}
                                    date={item.annee}
                                    etablissement={item.etablissement}
                                    description={item.description}
                                    key={index}
                                />
                    
                            ))}
                            </ul>
                    
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}