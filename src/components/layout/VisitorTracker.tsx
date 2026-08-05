"use client";

import { useEffect } from "react";

import { trackVisitor } from "@/lib/analytics/visitor";

export default function VisitorTracker() {
  useEffect(() => {
    void trackVisitor();
  }, []);

  return null;
}
