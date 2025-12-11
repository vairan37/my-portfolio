import Projet from "./Projet";

export default function Projets() {
  return (
    <div id="projets" className="border-2 h-[80vh] pl-50 pr-50">
      <h2 className="text-5xl font-bold">Projets</h2>
      <div className="grid grid-cols-2 gap-5">
        <Projet />
        <Projet />
        <Projet />
        <Projet />
      </div>
    </div>
  );
}
