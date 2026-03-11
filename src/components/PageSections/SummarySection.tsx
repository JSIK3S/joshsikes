import { Link } from "react-router-dom";

function SummarySection() {
  return (
    <div className="sm:max-w-xl">
      <div className="bg-gray-200 text-gray-900 rounded-lg mb-8 p-7 sm:p-8">
        <p className="text-2xl mb-8">Hi, I'm Josh!</p>
        <p className="text-xl mb-4">
          I'm a Fullstack Engineer working on digital products that matter! When
          I'm not coding in React & Ruby on Rails, you'll find me building legos
          with my two boys!
        </p>
        <span>
          Learn more about my story{" "}
          <Link to={"../about"} className="underline">
            here.
          </Link>
        </span>
      </div>
    </div>
  );
}

export { SummarySection };
