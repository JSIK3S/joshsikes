import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SQLIcon = () => {
  return (
    <div>
      <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faDatabase}
          size="2xl"
          className="hover:text-[#DF2935] hover:animate-bounce"
        />
      </a>
    </div>
  );
};

export { SQLIcon };
