import { useEffect } from "react";

export function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: Function,
) {
  function handleClick(e: globalThis.MouseEvent) {
    // Check if the click target is the close button inside the sidebar
    const closeButton = document.querySelector(
      ".sidebar-container .close-button",
    );
    if (closeButton && closeButton.contains(e.target as Node)) {
      return;
    }

    // Check if the click target is outside the sidebar
    if (ref.current !== null && !ref.current.contains(e.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
