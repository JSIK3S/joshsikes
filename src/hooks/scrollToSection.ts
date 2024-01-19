const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
  if (elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }
};

export { scrollToSection };
