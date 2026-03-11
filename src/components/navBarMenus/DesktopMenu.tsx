import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <div className="flex space-x-4">
      <Link to={"../"}>Home</Link>
      <Link to={"../about"}>About Me</Link>
    </div>
  );
}

export { DesktopMenu };
