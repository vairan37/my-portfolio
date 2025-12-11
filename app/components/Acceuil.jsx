import { FlowerIcon } from "./icons/FlowerIcon";

export default function Acceuil() {
  return (
    <div id="acceuil" className="mt-75 h-[60vh] relative overflow-hidden pl-50 pr-50">
      <h1 className="text-7xl font-bold">Victor Raveau</h1>
      <p className="text-3xl mt-20">
        Je suis un développeur web, actuellement en alternance chez CGI dans le
        cadre de ma 3ème année de BUT MMI (metier du multimedia et de
        l’internet)
      </p>
      <FlowerIcon className="animate-spin-slow absolute bottom-5 right-[-8rem]  text-black dark:text-white" />
    </div>
  );
}
