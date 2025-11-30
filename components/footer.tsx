import { Facebook, Github, Linkedin, Mail, Smartphone } from "lucide-react";

export function Footer(){
    return(
        <section id="footer" className="mt-4 py-6 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center">
            
            <p className="text-content dark:text-white">
                &copy; {new Date().getFullYear()} <span className="tracking-tighter text-md font-semibold">Norton R.</span>
            </p>

            <div className="flex space-x-4 my-4 md:my-0">
                <a href="https://github.com/norton582/" className="text-content hover:text-primary dark:bg-transparent dark:text-white border-gray-400 bg-white rounded-full p-1"><Github/></a>
                <a href="https://www.facebook.com/richardnorton.rakotovao" className="text-content dark:bg-transparent dark:text-white hover:text-primary border-gray-400 bg-white rounded-full p-1"><Facebook/></a>
                <a href="#" className="text-content hover:text-primary border-gray-400 bg-white dark:bg-transparent dark:text-white rounded-full p-1"><Linkedin /></a>
            </div>
            <div className="flex space-x-4">
                <div className="text-content dark:text-white tracking-tighter flex gap-1 items-center"><Smartphone size={20}/>034 23 478 17</div>
                <div className="text-content dark:text-white tracking-tighter flex gap-1 items-center"><Mail size={20} />norton.rakotovao@gmail.com</div>
            </div>
        </section>
    )
}