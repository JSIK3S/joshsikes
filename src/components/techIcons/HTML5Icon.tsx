import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HTML5Icon = () => {
  return (
    <div>
      <a
        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faHtml5}
          size="2xl"
          className="hover:text-[#DF2935] hover:animate-bounce"
        />
      </a>
    </div>
  );
};

export { HTML5Icon };
