import { Link, animateScroll } from "react-scroll";
import { GithubIcon } from "../techIcons/GithubIcon";
import { GitLabIcon } from "../techIcons/GitLabIcon";
import { LinkedInIcon } from "../techIcons/LinkedInIcon";
import { scrollToSection } from "../../hooks/scrollToSection";

function Header({
  navRefs,
}: {
  navRefs: Record<string, React.RefObject<HTMLDivElement>>;
}) {
  return (
    <header className="h-14 bg-[#487DC0]">
      <nav className="fixed top-0 left-0 right-0 bg-[#487DC0] text-white font-semibold p-4 flex justify-between">
        <div className="flex space-x-4">
          <button onClick={() => scrollToSection(navRefs.main)}>Main</button>
          <button onClick={() => scrollToSection(navRefs.about)}>About</button>
          <button onClick={() => scrollToSection(navRefs.skills)}>
            Skills
          </button>
          <button onClick={() => scrollToSection(navRefs.recommends)}>
            Recommends
          </button>
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
