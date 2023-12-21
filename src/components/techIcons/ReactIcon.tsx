import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReactIcon = () => {
  return (
    <div>
      <a href="https://react.dev/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faReact} size="2xl" />
      </a>
    </div>
  );
};

export { ReactIcon };
