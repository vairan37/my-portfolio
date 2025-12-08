import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Langue() {

  return (
    <div className="flex flex-row gap-1">
          <Button variant="outline">
            <p>Fr</p>
            <Globe className="dark:text-white" size={24} />
          </Button>
    </div>
  );
}
