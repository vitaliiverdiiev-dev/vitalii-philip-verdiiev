import Image from "next/image";

export const AcornGroup = () => {
  return (
    <div className="absolute -bottom-3 right-10">
      <div className="relative w-10 h-10 ">
        <Image
          alt="nut left"
          src="/nut.png"
          className="absolute rotate-[-15deg] left-0 top-1/2 -translate-y-1/2 z-0"
          width={14}
          height={14}
          priority
        />
        <Image
          alt="nut center"
          src="/nut.png"
          className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width={20}
          height={20}
          priority
        />
        <Image
          alt="nut right"
          src="/nut.png"
          className="absolute rotate-[20deg] right-0 top-1/2 -translate-y-1/2 z-0"
          width={14}
          height={14}
          priority
        />
      </div>
    </div>
  );
};
