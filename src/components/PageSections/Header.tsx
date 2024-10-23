import { GithubIcon, GitLabIcon, LinkedInIcon } from "../techIcons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-14 bg-[#487DC0]">
      <nav className="fixed top-0 left-0 right-0 bg-[#487DC0] text-white font-semibold p-4 flex justify-between">
        <div className="flex space-x-4">
          <Link to={"../"}>Home</Link>
          <Link to={"../about"}>About Me</Link>
          <Link to={"../skills"}>My Skills</Link>
          <Link to={"../recommends"}>Recommendations</Link>
        </div>
        <div className="hidden sm:flex space-x-4">
          <GithubIcon />
          <GitLabIcon />
          <LinkedInIcon />
        </div>
      </nav>
    </header>
  );
}

export { Header };
