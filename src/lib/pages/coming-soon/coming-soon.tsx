type Props = {
  title?: string;
};

export const ComingSoon: React.FC<Props> = ({ title }) => {
  return (
    <main className="flex flex-1 items-center justify-center bg-background text-foreground px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          {title ? title + " is coming soon!" : "Coming Soon!"}
        </h1>
        <p className="text-neutral-500 max-w-md mx-auto">
          This page is still under construction. I&apos;m crafting something
          meaningful - check back soon.
        </p>
      </div>
    </main>
  );
};
