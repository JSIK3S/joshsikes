import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GithubIcon = () => {
  return (
    <div>
      <a href="https://github.com/JSIK3S" target="blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2xl" className="" />
      </a>
    </div>
  );
};

export { GithubIcon };
