import React from "react";

function useWindowScroll() {
  const [scroll, setScroll] = React.useState(0);

  function handleScroll() {
    setScroll(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return scroll;
}

export default useWindowScroll;
