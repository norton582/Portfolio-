
import { Card, CardContent, CardHeader } from "./ui/card"
import { BriefcaseBusiness } from "lucide-react"



export function Services() {

    const Services = [
        {
            id: "01",
            titre: "Création de sites vitrines",
        },
        {
            id: "02",
            titre: "Création d'applications web",
        },
        {
            id: "03",
            titre: "Design d'applications Mobile",
        },
        {   
            id: "04",
            titre: "Design de sites web",
        },
        {
            id: "05",
            titre: "Maintenance Hardware et Software",
        },
        {
            id: "06",
            titre: "Installations réseaux",
        },
    ]
    return (
        <section id="services">
            <div className='text-center'>
                <h2 className="text-3xl pt-8 font-bold tracking-tighter sm:text-5xl text-primary">
                    Mes services
                </h2>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-15 justify-items-center">
            
                {Services.map((service, index) => (
                    <Card key={index} className="relative w-full border-l-5 dark:bg-black/40 dark:border-1 border-blue-500 hover:scale-105 transition-transform">
                        <CardHeader>
                            <span className="text-4xl text-black/30 font-bold tracking-tighter dark:text-primary">{service.id}</span>
                            <div className="absolute right-[-20] top-[-20] p-4 rounded-full bg-primary text-white"><BriefcaseBusiness className="text-2xl"/></div>
                        </CardHeader>
                        <CardContent>
                            <span className="text-2xl md:text-2xl dark:text-white font-semibold tracking-tighter text-content">
                                {service.titre}
                            </span>
                        </CardContent>
                        
                    </Card>
                ))}
                
            </div>
        </section>
        
    )
}

