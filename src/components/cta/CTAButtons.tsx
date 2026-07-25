"use client";

import { ArrowRight, Download, Github } from "lucide-react";

import Button from "@/components/ui/Button";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button size="lg">
        <Download className="mr-2 h-5 w-5" />
        Download for Windows
      </Button>

      <Button variant="secondary" size="lg">
        <Github className="mr-2 h-5 w-5" />
        View on GitHub
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
