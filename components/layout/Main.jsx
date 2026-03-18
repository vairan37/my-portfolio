import Acceuil from "@/components/sections/Acceuil";
import AboutMe from "@/components/sections/AboutMe";
import Projets from "@/components/sections/Projets";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Main() {
    return (
        <div className="flex flex-col gap-25 w-full mx-auto relative overflow-hidden">
            <Acceuil/>
            <AboutMe/>
            <Projets/>
            <Contact/>
            <ScrollToTop/>
        </div>
    );
}
//TODO: Revenir en haut de la page