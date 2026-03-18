import { FlowerIcon } from "@/components/ui/icons/FlowerIcon";

export default function Nav() {
  return (
    <div className="flex flex-row gap-5 items-center">
      <a href="#acceuil">Acceuil</a>
      <FlowerIcon className="w-[15px] h-[15px] animate-spin-slow text-black dark:text-white" />
      <a href="#about">About me</a>
      <FlowerIcon className="w-[15px] h-[15px] animate-spin-slow text-black dark:text-white" />
      <a href="#projets">Projects</a>
      <FlowerIcon className="w-[15px] h-[15px] animate-spin-slow text-black dark:text-white" />
      <a href="#contact">Contact</a>
    </div>
  );
}
