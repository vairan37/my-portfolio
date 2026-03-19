import Langue from "@/components/ui/Option/Langue";
import Theme from "@/components/ui/Option/Theme";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 flex flex-row bg-black/20 backdrop-blur-md z-50 border-b border-white/10 items-center p-3 dark:bg-black/50 dark:border-black/10">
      <div className="flex flex-row gap-5 ml-4 md:ml-10 flex-1">
        <Nav />
      </div>
      <img src="./favicon.ico" alt="logo" width="34px" />
      <div className="flex flex-row gap-5 mr-4 md:mr-10 flex-1 justify-end">
        <Theme />
        <Langue />
      </div>
    </div>
  );
}
