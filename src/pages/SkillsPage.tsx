import { Header, Footer } from "../components/pageSections";
import {
  RubyIcon,
  ReactIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSSIcon,
  SQLIcon,
} from "../components/techIcons";

function SkillsPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[800px]">
        <section>
          <h2 className="text-3xl mb-16 text-center">
            My Skills, Languages, & Frameworks:
          </h2>
          <section>
            <ul className="flex items-center justify-between flex-wrap">
              <li className="m-7">
                <RubyIcon />
              </li>
              <li className="m-7">
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
              <li className="m-7">
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
              <li className="m-7">
                <ReactIcon />
              </li>
              <li className="m-7">
                <JavaScriptIcon />
              </li>
              <li className="m-7">
                <HTML5Icon />
              </li>
              <li className="m-7">
                <CSSIcon />
              </li>
              <li className="m-7">
                <SQLIcon />
              </li>
            </ul>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

export { SkillsPage };
