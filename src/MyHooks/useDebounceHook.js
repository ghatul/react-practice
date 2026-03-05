import { useState, useEffect } from "react";

/*
Create a reusable useDebounce hook that delays updating a value until a specified time has passed.
Explain where you would use it (e.g., search input optimization).
*/

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

const Search = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log("API Call:", debouncedText);
    }
  }, [debouncedText]);

  return <input onChange={(e) => setText(e.target.value)} />;
};



