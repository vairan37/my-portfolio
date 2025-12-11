import { Github, Linkedin, Mail } from "lucide-react";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="p-10 pb-5 bg-black/20 backdrop-blur-mt z-50 border-t border-white/10 items-center  dark:bg-black/50 dark:border-black/10">
      <div className="flex flex-row justify-between">
        <Nav />
        <div className="flex flex-row gap-5">
          <a
            href="https://github.com/vairan37"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer">
              <Github className="text-white dark:text-black" size={16} />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-raveau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer">
              <Linkedin className="text-white dark:text-black" size={16} />
            </Button>
          </a>
          <a href="mailto:vicraveau@gmail.com">
            <Button className="cursor-pointer">
              <Mail className="text-white dark:text-black" size={16} />
            </Button>
          </a>
        </div>
      </div>
      <p className="text-xs flex justify-center">
        © {year} Victor Raveau. All rights reserved.
      </p>
    </div>
  );
}
