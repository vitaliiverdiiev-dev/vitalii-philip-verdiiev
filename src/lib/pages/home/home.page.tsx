import { MainLogo } from "@/widgets/logo/main-logo";

export const HomePage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <MainLogo className="text-3xl md:text-5xl font-normal tracking-[1.3px]" />
        <h2 className="text-lg mt-4 md:text-2xl">
          React Engineer, Music Producer, and Artist
        </h2>
      </div>
    </div>
  );
};
