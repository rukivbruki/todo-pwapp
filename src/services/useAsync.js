import {useCallback, useEffect, useState} from 'react';
import {ActionCreator} from "../reduser";

const useAsync = (dispatch, todoApi, immediate = true) => {
  const [pending, setPending] = useState(false);
  const execute = useCallback(() => {
	return todoApi()
	.then((result) => dispatch(ActionCreator.initial(pending, result)))
	.catch(error => console.log(error))
	.finally(() => setPending(true));
  }, [todoApi, dispatch]);
  
  useEffect(() => {
	if (immediate) {
	  execute();
	}
  }, [execute, immediate]);
  
  return {execute};
};

export {useAsync}
