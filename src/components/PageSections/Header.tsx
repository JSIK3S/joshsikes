import { GithubIcon, GitLabIcon, LinkedInIcon } from "../techIcons";
import { DesktopMenu, MobileMenu } from "../navBarMenus";
import { useWindowSize } from "../../hooks";

function Header() {
  const { width } = useWindowSize();

  return (
    <header className="h-14 bg-[#487DC0]">
      <nav className="fixed top-0 left-0 right-0 bg-[#487DC0] text-white font-semibold p-4 flex justify-between">
        {width > 480 ? <DesktopMenu /> : <MobileMenu />}
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
