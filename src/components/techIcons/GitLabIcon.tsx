import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GitLabIcon = () => {
  return (
    <div>
      <a href="https://gitlab.com/josh.sikes" target="blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGitlab} size="2xl" className="" />
      </a>
    </div>
  );
};

export { GitLabIcon };
