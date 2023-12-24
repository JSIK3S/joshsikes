import { faGem } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RubyIcon = () => {
  return (
    <div>
      <a href="https://ruby-doc.org/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faGem}
          size="2xl"
          className="hover:text-[#DF2935]"
        />
      </a>
    </div>
  );
};

export { RubyIcon };
