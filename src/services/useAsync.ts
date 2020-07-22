import {Dispatch, useCallback, useEffect, useState} from 'react';
import {ActionCreator} from "../reduser";
import {StateInterface} from "./interfaces";
import {Payload} from "./types";

const useAsync = (
  dispatch: Dispatch<{ payload: Payload; type: string; }>,
  todoApi: () => Promise<StateInterface>,
  immediate: boolean = true
) => {
  const [pending, setPending] = useState(false);
  const execute = useCallback(() => {
	return todoApi()
	  .then((result: StateInterface) => dispatch(ActionCreator.initial(pending, result)))
	  .catch((error: string) => console.log(error))
	  .finally(() => setPending(true));
  }, [todoApi]);

  useEffect(() => {
	if (immediate) {
	  execute();
	}
  }, [execute, immediate]);

  return {execute};
};

export {useAsync}
