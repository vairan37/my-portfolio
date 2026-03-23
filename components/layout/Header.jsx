// import Langue from "@/components/ui/Option/Langue";
import Theme from "@/components/ui/Option/Theme";
import Nav from "./Nav";
import { FlowerIcon } from "../ui/icons/FlowerIcon";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 flex flex-row bg-black/10 backdrop-blur-md z-50 border-b border-white/10 items-center p-3 dark:bg-black/50 dark:border-black/10">
      <div className="flex flex-row gap-5 ml-4 sm:ml-6 lg:ml-10 flex-1">
        <Nav />
      </div>
      <a href="#acceuil" className="cursor-pointer hover:opacity-80 transition-opacity">
        <FlowerIcon className="w-[25px] h-[25px] text-black dark:text-white" />
      </a>
      <div className="flex flex-row gap-5 mr-4 sm:mr-6 lg:mr-10 flex-1 justify-end">
        <Theme />
        {/* <Langue />*/}
      </div>
    </div>
  );
}
