import iconX from "../assets/iconX.png";
import iconInsta from "../assets/iconInsta.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconTwitch from "../assets/iconTwitch.png";
import iconThreads from "../assets/iconThreads.png";
import iconDiscord from "../assets/iconDiscord.png";

const _bar_media = () => {
  return (
    <div className="container flex  justify-center items-center h-[40px]  w-[250px] sm:w-auto md:h-[400x] max-w-[1100px] sm:mt-0 card animate-dance-movil sm:animate-dance-tablet md:animate-dance-latop xl:animate-dance-desktop">
      <a
        href="https://twitter.com/AgustnOntivero6"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <img
          className="max-w-[15px]"
          src={iconX}
          alt="x"
        />
      </a>
      <a
        href="https://www.instagram.com/luciano.a.ontiveros/"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <img
          className="max-w-[15px]"
          src={iconInsta}
          alt="Instagram"
        />
      </a>
      <a
        href="https://twitch.tv/cuartodechenz"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <img
          className="max-w-[15px]"
          src={iconTwitch}
          alt="Twitch"
        />
      </a>
      <a
        href="https://github.com/lucianoontiveros"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <img
          className="max-w-[15px]"
          src={iconGitHub}
          alt="GitHub"
        />
      </a>
      <a
        href="https://www.threads.net/@luciano.a.ontiveros?hl=es-la"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <img
          className="max-w-[15px]"
          src={iconThreads}
          alt="Threads"
        />
      </a>
      <a
        href="https://discord.gg/UdU3wvpWu7"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <img
          className="max-w-[15px]"
          src={iconDiscord}
          alt="Discord"
        />
      </a>
    </div>
  );
};

export default _bar_media;
