import Acceuil from "./Acceuil";
import AboutMe from "./AboutMe";
import Projets from "./Projets";
import Contact from "./Contact";

export default function Main() {
  return (
    <div className="flex flex-col gap-25 max-w-7xl w-full mx-auto mb-24">
      <Acceuil />
      <AboutMe />
      <Projets />
      <Contact />
    </div>
  );
}
