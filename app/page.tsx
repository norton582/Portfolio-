

import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";
import { Parcours } from "@/components/parcours";
import { Projets } from "@/components/projets";
import { Services } from "@/components/services";

export default async function Home() {

  return (
    <div className="max-w-6xl mx-auto w-[90%]">
      <div className="fixed top-0 left-10 w-48 md:w-60 md:h-30 dark:hidden bg-green-200 dark:bg-blue-700 rounded-b-full opacity-50 animate-pulse"></div>
      
      
      {/*Components */}
      <NavBar/>
      <Hero/>
      <Parcours/>
      <Projets/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}


