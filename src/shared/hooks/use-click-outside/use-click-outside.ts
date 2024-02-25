import { useEffect } from "react";
export const useClickOutside = (ref, callback) => {
  const handleClick = (evt) => {
    if (ref.current && !ref.current.contains(evt.target)) {
      callback(evt);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  });
};
