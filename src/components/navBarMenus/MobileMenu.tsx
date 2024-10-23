import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    // <div className="flex flex-col">
    //   <div className="h-[1px] bg-gray-50"></div>
    //   <div className="h-[1px] bg-gray-50"></div>
    //   <div className="h-[1px] bg-gray-50"></div>
    // </div>
    <div className="flex space-x-4">
      <Link to={"../"}>Home</Link>
      <Link to={"../about"}>About</Link>
      <Link to={"../skills"}>Skills</Link>
      <Link to={"../recommends"}>Recommends</Link>
    </div>
  );
}

export { MobileMenu };
