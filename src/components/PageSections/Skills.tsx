import { CSSIcon } from "../techIcons/CSSIcon";
import { HTML5Icon } from "../techIcons/HTML5Icon";
import { JavaScriptIcon } from "../techIcons/JavaScriptIcon";
import { ReactIcon } from "../techIcons/ReactIcon";
import { RubyIcon } from "../techIcons/RubyIcon";
import { SQLIcon } from "../techIcons/SQLIcon";

function Skills({
  refs,
}: {
  refs: Record<string, React.RefObject<HTMLDivElement>>;
}) {
  return (
    <div
      ref={refs.skills}
      className="flex justify-center items-center h-[800px]"
    >
      <section>
        <h2 className="text-3xl mb-16 text-center">
          My Skills, Languages, & Frameworks:
        </h2>
        <section>
          <ul className="flex items-center justify-between flex-wrap">
            <li className="m-5">
              <HTML5Icon />
            </li>
            <li className="m-5">
              <CSSIcon />
            </li>
            <li className="m-5">
              <JavaScriptIcon />
            </li>
            <li className="m-5">
              <RubyIcon />
            </li>
            <li className="m-5">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/joshsikes/assets/typescript-32.png"
                  alt="TypeScript"
                  className="hover:animate-bounce"
                />
              </a>
            </li>
            <li className="m-5">
              <a
                href="https://guides.rubyonrails.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/joshsikes/assets/rails_40.png"
                  alt="Ruby on Rails"
                  className="hover:animate-bounce"
                />
              </a>
            </li>
            <li className="m-5">
              <ReactIcon />
            </li>
            <li className="m-5">
              <SQLIcon />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export { Skills };
