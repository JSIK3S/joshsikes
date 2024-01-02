import { Link, animateScroll } from "react-scroll";
import { GithubIcon } from "../techIcons/GithubIcon";
import { GitLabIcon } from "../techIcons/GitLabIcon";
import { LinkedInIcon } from "../techIcons/LinkedInIcon";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#487DC0] text-white font-semibold p-4 flex justify-between">
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="main" smooth={true} duration={500} offset={-800}>
              Main
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-200}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-450}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="recommends" smooth={true} duration={500}>
              Recommends
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex space-x-4">
        <GithubIcon />
        <GitLabIcon />
        <LinkedInIcon />
      </div>
    </nav>
  );
}

export { Nav };
