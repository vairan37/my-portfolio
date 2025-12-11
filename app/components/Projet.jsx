import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Projets({
  title,
  description,
  technologies,
  image,
  lien,
}) {
  return (
    <Card className="flex flex-row h-[200px] overflow-hidden p-0 gap-0 grayscale hover:grayscale-0 transition duration-500 hover:scale-102">
      <div className="flex flex-col w-full py-6">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>{lien}</CardAction>
        </CardHeader>
        <CardFooter className="mt-auto">
          <div className="flex gap-3 flex-wrap">
            {technologies.map((technology) => (
              <Badge key={technology} >
                {technology}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </div>
      <div className="relative w-[200px] h-full shrink-0">
        <Image src={image} fill className="object-cover" alt={title} />
      </div>
    </Card>
  );
}
