import { useEffect, useRef } from "react";

export const useOutsideClick = (action, dispatch) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        dispatch(action());
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, action, dispatch]);

  return { ref };
};
