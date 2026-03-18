import Projet from "./Projet";
import { projets } from "@/data/projets.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
                <DialogTitle className="text-3xl font-bold">
                  {projet.title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {projet.descriptionDialog}
                </DialogDescription>
                <div className="flex gap-3 flex-wrap mt-5">
                  {projet.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap mt-5">
                  {projet.imgMock.map((img) => (
                    <Image
                      key={img}
                      src={img}
                      alt={projet.title}
                      width={400}
                      height={400}
                    />
                  ))}
                </div>
                {projet.imgViz && (
                  <Image
                    src={projet.imgViz}
                    alt={projet.title}
                    width={500}
                    height={500}
                  />
                )}
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
//TODO: Local storage pour le projet Clicker sauvegarde des points
