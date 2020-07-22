import {useState} from "react";
import {initialData} from "./initialData";
import {StateInterface} from "./interfaces";

function useLocalStorage(key = "store", initialValue = initialData) {
  const [storedValue, setStoredValue] = useState(() => {
	try {
	  const item = window.localStorage.getItem(key);
	  return item ? JSON.parse(item) : initialValue;
	} catch (error) {
	  console.log(error);
	  return initialValue;
	}
  });

  const setValue = (value: (value: StateInterface) => void) => {
	try {
	  const valueToStore =
		value instanceof Function ? value(storedValue) : value;
	  setStoredValue(valueToStore);
	  window.localStorage.setItem(key, JSON.stringify(valueToStore));
	} catch (error) {
	  console.log(error);
	}
  };
  return [storedValue, setValue];
}

export {useLocalStorage}
