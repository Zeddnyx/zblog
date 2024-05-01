import { useEffect } from "react";

const useKeyboardShortcut = (targetKey: string, callback: Function) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (event.altKey && key == targetKey) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetKey, callback]);
};

export default useKeyboardShortcut;
