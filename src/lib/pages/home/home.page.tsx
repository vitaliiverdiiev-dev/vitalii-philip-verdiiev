import { MainLogo } from "@/widgets/logo/main-logo";

export const HomePage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <MainLogo className="text-5xl font-normal tracking-[1.3px]" />
        <h2 className="mt-4 text-2xl">React Engineer, Music Producer, and Artist</h2>
      </div>
    </div>
  );
};
