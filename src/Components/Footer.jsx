import iconX from "../assets/iconX.png";
import iconInsta from "../assets/iconInsta.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconTwitch from "../assets/iconTwitch.png";
import iconThreads from "../assets/iconThreads.png";
import iconDiscord from "../assets/iconDiscord.png";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900  text-white p-4 rounded ">
      <div className=" items-center sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline"
          >
            DevUtility™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 justify-around sm:justify-center sm:mt-0">
          <a
            href="https://twitter.com/AgustnOntivero6"
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <img
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
              className="max-w-[15px]"
              src={iconDiscord}
              alt="Discord"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
