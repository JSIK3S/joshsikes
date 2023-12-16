import { CSSIcon } from "../techIcons/CSSIcon";
import { HTML5Icon } from "../techIcons/HTML5Icon";
import { JavaScriptIcon } from "../techIcons/JavaScriptIcon";
import { ReactIcon } from "../techIcons/ReactIcon";
import { RubyIcon } from "../techIcons/RubyIcon";
import { SQLIcon } from "../techIcons/SQLIcon";

function Skills() {
  return (
    <div className="h-screen flex justify-center items-center">
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
            <li>Ts</li>
            <li>Rails</li>
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
