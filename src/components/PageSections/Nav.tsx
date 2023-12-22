import { Link, animateScroll } from "react-scroll";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="main" smooth={true} duration={500}>
            Main
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="recommends" smooth={true} duration={500}>
            Recommends
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Nav };