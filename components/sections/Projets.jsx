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
    <div id="projets" className="min-h-[70vh] px-6 md:px-12 lg:px-50 py-10 lg:py-0">
      <h2 className="text-4xl lg:text-5xl font-bold">Projets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 lg:mt-15">
        {projets.map((projet) => (
          <Dialog key={projet.id}>
            <DialogTrigger className="w-full text-left">
              <Projet
                title={projet.title}
                description={projet.description}
                technologies={projet.technologies}
                image={projet.image}
              />
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] w-[95vw] lg:max-w-7xl lg:w-full p-0 overflow-hidden">
              <div className="overflow-y-auto h-full max-h-[90vh] p-6 lg:p-10">
                <DialogHeader>
                  <DialogTitle className="text-xl lg:text-3xl font-bold text-left">
                    {projet.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm lg:text-lg text-left mt-2">
                    {projet.descriptionDialog}
                  </DialogDescription>
                  <div className="flex gap-2 lg:gap-3 flex-wrap mt-4">
                    {projet.technologies.map((technology) => (
                      <Badge key={technology} className="text-[10px] lg:text-sm">{technology}</Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    {projet.imgMock.map((img) => (
                      <div key={img} className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                        <Image
                          src={img}
                          alt={projet.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {projet.imgViz && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                        <Image
                          src={projet.imgViz}
                          alt={projet.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </DialogHeader>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
