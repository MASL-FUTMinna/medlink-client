import { useEffect } from "react";

export const useSmoothScroll = () => {
  const smoothScrollTo = (target: string) => {
    const element = document.getElementById(target);

    if (element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      e.preventDefault();
      if (
        e?.currentTarget?.getAttribute &&
        e.currentTarget.getAttribute("href")?.startsWith("#")
      ) {
        const id = e.currentTarget.getAttribute("href").slice(1);
        smoothScrollTo(id);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
