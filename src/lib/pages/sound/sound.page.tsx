const aspects = ["Beatmaker", "Sound Engineer", "Producer", "Artist"];

export const SoundPage = () => {
  return (
    <div className="container mx-auto flex-1 grid grid-cols-2">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl">What I Do</h2>
      </div>
      <div className="flex flex-col justify-center">
        {aspects.map((aspect, index) => (
          <div key={index} className="flex items-center hover:bg-gray-100 py-4 hover:font-semibold">
            <h3 className="text-2xl ml-2">{aspect}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
