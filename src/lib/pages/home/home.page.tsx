import { MainLogo } from "@/widgets/logo/main-logo";

export const HomePage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <MainLogo className="text-6xl font-normal" />
        <h2 className="mt-4 text-4xl">React Engineer, Music Producer, and Artist</h2>
      </div>
    </div>
  );
};
