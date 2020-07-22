import React, {useCallback, useEffect, useState} from 'react';
import {ActionCreator} from "../reduser/reducer";

const useAsync = (dispatch, todoApi, immediate = true) => {
  const [pending, setPending] = useState(false);
  const execute = useCallback(() => {
	return todoApi()
	.then((result) => dispatch(ActionCreator.initial(pending, result)))
	.catch(error => console.log(error))
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
