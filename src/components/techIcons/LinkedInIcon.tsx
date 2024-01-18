import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkedInIcon = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/josh-sikes-25089735/"
        target="blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="" />
      </a>
    </div>
  );
};

export { LinkedInIcon };
