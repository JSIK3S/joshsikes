import { CSSIcon } from "../techIcons/CSSIcon";
import { HTML5Icon } from "../techIcons/HTML5Icon";
import { JavaScriptIcon } from "../techIcons/JavaScriptIcon";
import { ReactIcon } from "../techIcons/ReactIcon";
import { RubyIcon } from "../techIcons/RubyIcon";
import { SQLIcon } from "../techIcons/SQLIcon";

function Skills() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <section id="skills">
        <h2 className="text-3xl mb-16">My Skills, Languages, & Frameworks:</h2>
        <section>
          <ul className="flex justify-items-center justify-between">
            <li>
              <HTML5Icon />
            </li>
            <li>
              <CSSIcon />
            </li>
            <li>
              <JavaScriptIcon />
            </li>
            <li>
              <RubyIcon />
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                Ts
              </a>
            </li>
            <li>
              <a
                href="https://guides.rubyonrails.org/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl"
              >
                Rails
              </a>
            </li>
            <li>
              <ReactIcon />
            </li>
            <li>
              <SQLIcon />
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export { Skills };
