"use client";

import {ArrowUpIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function ScrollToTop() {
  
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
    function GoTop() {
        window.scrollTo(0, 0);
    }


    return (
        <div className={`fixed bottom-8 right-8 z-100 transition-all duration-300 ${
          isAtTop ? "opacity-0 scale-50 pointer-events-none translate-y-10" : "opacity-100 scale-100 pointer-events-auto translate-y-0"
        }`}>
            <Button variant="outline" size="icon" aria-label="Submit" onClick={GoTop}>
                <ArrowUpIcon/>
            </Button>
        </div>
    );
}
