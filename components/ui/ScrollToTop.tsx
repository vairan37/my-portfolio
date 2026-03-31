"use client";

import {ArrowUpIcon} from "lucide-react"
import {Button} from "@/components/ui/button"

export default function ScrollToTop() {


    function GoTop() {
        window.scrollTo(0, 0);
    }


    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button variant="outline" size="icon" aria-label="Submit" onClick={GoTop}>
                <ArrowUpIcon/>
            </Button>
        </div>
    );
}
