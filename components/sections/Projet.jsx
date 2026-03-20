import {
  Card
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Projets({
  title,
  description,
  technologies,
  image,
}) {
  return (
    <Card className="flex flex-row min-h-[150px] md:h-[200px] overflow-hidden p-0 gap-0 md:grayscale md:hover:grayscale-0 transition duration-500 hover:scale-102 cursor-pointer">
      <div className="flex flex-col flex-1 py-2 md:py-6 overflow-hidden">
        <div className="px-3 md:px-6">
          <h3 className="text-left font-bold text-sm md:text-xl line-clamp-1">{title}</h3>
          <p className="text-left text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-auto px-3 pb-2 md:px-6 md:pb-6">
          <div className="flex gap-1 md:gap-3 flex-wrap">
            {technologies.map((technology) => (
              <Badge key={technology} className="text-[9px] md:text-sm px-1 md:px-2 py-0">
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-[100px] md:w-[200px] min-h-[150px] md:h-full shrink-0">
        <Image 
          src={image} 
          fill 
          sizes="(max-width: 768px) 100px, 200px"
          className="object-cover" 
          alt={title} 
        />
      </div>
    </Card>
  );
}
