import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SQLIcon = () => {
  return (
    <div>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faDatabase} size="2xl" />
      </a>
    </div>
  );
};

export { SQLIcon };
