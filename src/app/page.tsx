'use client';

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto grid place-items-center h-screen">
      <div className="text-center">
        <Button className="w-full" onClick={() => console.log('Hired')}>Hire Me</Button>
      </div>
    </div>
  );
}
