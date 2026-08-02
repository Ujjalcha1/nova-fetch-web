import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center text-center">
      <p aria-hidden="true" className="text-8xl font-black text-violet-500">
        404
      </p>

      <h1 className="mt-6 text-4xl font-bold text-white">Page Not Found</h1>

      <p className="mt-6 max-w-lg text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Button asChild className="mt-10">
        <Link href="/">Go Home</Link>
      </Button>
    </Container>
  );
}
