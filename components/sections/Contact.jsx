import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText, Link, Download } from "lucide-react";

const jsonContact = [
  {
    id: 0,
    name: "Github",
    icon: <Github />,
    url: "https://github.com/vairan37",
    description: "vairan37",
    iconBtn: <Link />,
  },
  {
    id: 1,
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/victor-raveau/",
    description: "Victor Raveau",
    iconBtn: <Link />,
  },
  {
    id: 2,
    name: "Mail",
    icon: <Mail />,
    url: "mailto:vicraveau@gmail.com",
    description: "vicraveau@gmail.com",
    iconBtn: <Link />,
  },
  {
    id: 3,
    name: "CV",
    icon: <FileText />,
    url: "/documents/CV-Raveau-Victor.pdf",
    description: "Télecharger",
    iconBtn: <Download />,
  },
];

export default function Contact() {
  return (
    <div id="contact" className="h-full px-6 md:px-12 lg:px-50">
      <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 w-full lg:w-[60%] mx-auto">
        {jsonContact.map((contact) => (
          <a
            key={contact.id}
            href={contact.url}
            download={contact.name === "CV" ? "CV-Raveau-Victor.pdf" : null}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="cursor-pointer h-full hover:border-black/30 dark:hover:border-white/30 transition-colors">
              <CardHeader>
                <CardTitle>{contact.name}</CardTitle>
                <CardDescription>{contact.description}</CardDescription>
                <CardAction>
                  <Button className="cursor-pointer">{contact.iconBtn}</Button>
                </CardAction>
              </CardHeader>
              <CardContent>{contact.icon}</CardContent>
            </Card>
          </a>
        ))}
        {/* TODO : Ajouter une préview pour le CV */}
      </div>
    </div>
  );
}
