import Projet from "./Projet";
import { projets } from "../Data/projets.json";

export default function Projets() {
  return (
    <div id="projets" className="h-[70vh] pl-50 pr-50">
      <h2 className="text-5xl font-bold">Projets</h2>
      <div className="grid grid-cols-2 gap-5 mt-15">
        {projets.map((projet) => (
          <Projet
            key={projet.id}
            title={projet.title}
            description={projet.description}
            technologies={projet.technologies}
            image={projet.image}
            lien={projet.lien}
          />
        ))}
      </div>
    </div>
  );
}
