import Accueil from "@/components/sections/Accueil";
import AboutMe from "@/components/sections/AboutMe";
import Projets from "@/components/sections/Projets";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Background from "../ui/Background";

export default function Main() {
    return (
      <div className="flex flex-col gap-12 md:gap-25 w-full mx-auto relative overflow-hidden">
            <Background />
            <Accueil/>
            <AboutMe/>
            {/* TODO: Ajouter une section "Compétences" (défilement de logos marquee) */}
            <Projets/>
            <Contact/>
            <ScrollToTop/>
        </div>
    );
}
//TODO: Revenir en haut de la page