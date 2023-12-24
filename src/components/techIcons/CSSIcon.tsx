import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CSSIcon = () => {
  return (
    <div>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faCss3}
          size="2xl"
          className="hover:text-[#DF2935]"
        />
      </a>
    </div>
  );
};

export { CSSIcon };
