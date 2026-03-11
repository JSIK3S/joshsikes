import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="flex space-x-4">
      <Link to={"../"}>Home</Link>
      <Link to={"../about"}>About</Link>
    </div>
  );
}

export { MobileMenu };
