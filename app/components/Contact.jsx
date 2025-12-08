import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="h-[20vh]">
      <h2 className="text-5xl font-bold">Contact</h2>

      <div className="flex flex-row gap-5 justify-around items-center h-3/4">
        <div className="bg-black dark:bg-white p-3 rounded-2xl">
          <a href="https://github.com/vairan37">
            <Github className="text-white dark:text-black" size={30} />
          </a>
        </div>
        <div className="bg-black dark:bg-white p-3 rounded-2xl">
          <a href="https://www.linkedin.com/in/victor-raveau/">
            <Linkedin className="text-white dark:text-black" size={30} />
          </a>
        </div>
        <div className="bg-black dark:bg-white p-3 rounded-2xl">
          <a href="mailto:vicraveau@gmail.com">
            <Mail className="text-white dark:text-black" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
