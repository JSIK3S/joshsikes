import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JavaScriptIcon = () => {
  return (
    <div>
      <a href="https://javascript.info/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faJs} size="2xl" />
      </a>
    </div>
  );
};

export { JavaScriptIcon };
