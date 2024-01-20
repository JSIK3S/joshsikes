import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function ScrollToTopIcon() {
  const [showScrollToTopIcon, setShowScrollToTopIcon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTopIcon(true);
      } else {
        setShowScrollToTopIcon(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-8">
      {showScrollToTopIcon && (
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          onClick={scrollTop}
          size="2xl"
          className="hover:text-[#DF2935]"
        />
      )}
    </div>
  );
}

export { ScrollToTopIcon };
