"use client";

import { Button } from "@/shared";

export const HomePage = () => {
  return (
    <div className="container mx-auto grid place-items-center h-full">
      <div className="text-center">
        <Button className="w-full" onClick={() => console.log("Hired")}>
          Hire Me
        </Button>
      </div>
    </div>
  );
};
