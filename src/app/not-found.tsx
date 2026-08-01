import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-black text-violet-500">404</h1>

      <h2 className="mt-6 text-4xl font-bold text-white">Page Not Found</h2>

      <p className="mt-6 max-w-lg text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Button asChild className="mt-10">
        <Link href="/">Go Home</Link>
      </Button>
    </Container>
  );
}
