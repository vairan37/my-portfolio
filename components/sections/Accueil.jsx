import { FlowerIcon } from "@/components/ui/icons/FlowerIcon";

export default function Accueil() {
  return (
    <div
      id="accueil"
      className="mt-20 md:mt-32 lg:mt-75 pt-16 md:pt-20 lg:pt-0 min-h-fit lg:h-[60vh] relative overflow-hidden px-6 md:px-12 lg:px-50"
    >
      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold">Victor Raveau</h1>
        <p className="text-xl md:text-2xl mt-10 md:mt-20">        
          Je suis Victor <FlowerIcon className="inline w-6 h-6 mb-2" /> développeur web
          en troisième année de BUT MMI et alternant chez CGI. 
        </p>
      </div>
      <FlowerIcon className="hidden lg:block animate-spin-slow absolute bottom-5 -right-20 w-[250px] h-[250px] text-black dark:text-white z-0 pointer-events-none" />
    </div>
  );
}
