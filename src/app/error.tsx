'use client';

import { Button } from "../components/ui/Button";


export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
      <p className="text-white mb-8 max-w-md">
        We couldn't load the product details. This might be a temporary connection issue.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Try again
        </Button>
        <Button onClick={() => window.location.href = '/'} variant="outline">
          Return Home
        </Button>
      </div>
    </div>
  );
}