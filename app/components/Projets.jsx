import Projet from "./Projet";
import { projets } from "../Data/projets.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Projets() {
  return (
    <div id="projets" className="h-[70vh] pl-50 pr-50">
      <h2 className="text-5xl font-bold">Projets</h2>
      <div className="grid grid-cols-2 gap-5 mt-15">
        {projets.map((projet) => (
          <Dialog key={projet.id}>
            <DialogTrigger>
              <Projet
                title={projet.title}
                description={projet.description}
                technologies={projet.technologies}
                image={projet.image}
              />
            </DialogTrigger>
            <DialogContent className="h-[80vh] w-full sm:max-w-[80vw]">
              <DialogHeader>
                <DialogTitle>{projet.title}</DialogTitle>
                <DialogDescription>
                  {projet.descriptionDialog}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
