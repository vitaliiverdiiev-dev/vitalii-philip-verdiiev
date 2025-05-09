import { Icon } from "@/shared";

export const CheckMusic = () => {
  return (
    <div>
      <p className="text-2xl text-center font-thin">Check out my music</p>
      <ul className="flex items-center justify-center gap-4 mt-6 transition-colors duration-300">
        <li>
          <a
            href="https://music.apple.com/us/artist/phat-phil/1795527545"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              weight="thin"
              icon="apple"
              size="40px"
              className="hover:text-gray-600 transition-colors duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/artist/5pV83NNFvuXkFnDozj5rhP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              weight="thin"
              icon="spotify"
              size="40px"
              className="hover:text-green-600 transition-colors duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=wZgyfSyi_2Q&list=OLAK5uy_nd6ClFkBPxalSEwDzpGoNDhLIh9mLecoE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              weight="thin"
              icon="youtube"
              size="40px"
              className="hover:text-red-600 transition-colors duration-300"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
