import { Github, Linkedin, Mail } from "lucide-react";
import Nav from "./Nav";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="p-10 pb-5 bg-black/20 backdrop-blur-mt z-50 border-t border-white/10 items-center  dark:bg-black/50 dark:border-black/10">
      <div className="flex flex-row justify-between">
        <Nav />
        <div className="flex flex-row gap-5">
          <div className="bg-black dark:bg-white p-3 rounded-2xl">
            <a href="https://github.com/vairan37">
              <Github className="text-white dark:text-black" size={16} />
            </a>
          </div>
          <div className="bg-black dark:bg-white p-3 rounded-2xl">
            <a href="https://www.linkedin.com/in/victor-raveau/">
              <Linkedin className="text-white dark:text-black" size={16} />
            </a>
          </div>
          <div className="bg-black dark:bg-white p-3 rounded-2xl">
            <a href="mailto:vicraveau@gmail.com">
              <Mail className="text-white dark:text-black" size={16} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs flex justify-center">
        © {year} Victor Raveau. All rights reserved.
      </p>
    </div>
  );
}
