import { FlowerIcon } from "@/components/ui/icons/FlowerIcon";

export default function Acceuil() {
  return (
    <div
      id="acceuil"
      className="mt-20 md:mt-75 pt-16 md:pt-0 min-h-fit md:h-[60vh] relative overflow-hidden px-6 md:px-50"
    >
      <h1 className="text-4xl md:text-7xl font-bold">Victor Raveau</h1>
      <p className="text-xl md:text-3xl mt-10 md:mt-20">
        Je suis Victor <FlowerIcon className="inline w-6 h-6 mb-2" /> Développeur
        Front-End en BUT MMI et chez CGI. Je conçois des interfaces modernes
        avec React et Vue.js, du maquettage Figma (UI/UX) au code fonctionnel.
      </p>
      <FlowerIcon className="hidden md:block animate-spin-slow absolute bottom-5 -right-32 w-[337px] h-[327px] text-black dark:text-white z-0 pointer-events-none" />
    </div>
  );
}
//TODO: ajoute un indicateur de scroll
//TODO: ajoute un effet de scroll smooth
//TODO: faire la version mobile
