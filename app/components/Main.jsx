import Acceuil from "./Acceuil";
import AboutMe from "./AboutMe";
import Projets from "./Projets";
import Contact from "./Contact";

export default function Main() {
  return (
    <div className="flex flex-col gap-25 w-full mx-auto relative overflow-hidden">
      <Acceuil />
      <AboutMe />
      <Projets />
      <Contact />
    </div>
  );
}
//TODO: Revenir en haut de la page