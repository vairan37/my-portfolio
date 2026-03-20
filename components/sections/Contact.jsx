import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Link,
  Download,
} from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="h-full px-6 md:px-50">
      <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-full md:w-[60%] mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
            <CardDescription>vairan37</CardDescription>
            <CardAction>
              <a
                href="https://github.com/vairan37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer">
                  <Link />
                </Button>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Github />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Linkedin</CardTitle>
            <CardDescription>Victor Raveau</CardDescription>
            <CardAction>
              <a
                href="https://www.linkedin.com/in/victor-raveau/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer">
                  <Link />
                </Button>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Linkedin />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mail</CardTitle>
            <CardDescription>vicraveau@gmail.com</CardDescription>
            <CardAction>
              <a href="mailto:vicraveau@gmail.com">
                <Button className="cursor-pointer">
                  <Link />
                </Button>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Mail />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>CV</CardTitle>
            <CardDescription>Télécharger</CardDescription>
            <CardAction>
              <a href="mailto:vicraveau@gmail.com">
                <Button className="cursor-pointer">
                  <Download />
                </Button>
              </a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <FileText />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
