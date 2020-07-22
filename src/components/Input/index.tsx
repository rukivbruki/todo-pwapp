import React, {useContext} from "react";
import styled from 'styled-components';
import {ActionCreator, handleKeyDown} from "../../reduser";
import {Context} from "../../services/сontextCreater";
import {useLocalStorage} from "../../services/useLocalStorage";
import {PropsInterface} from "../../services/interfaces";

const StyledInput = styled.input<PropsInterface>`
  min-width: 172px;
  border: none;
  background: transparent;
  color: ${({todo}) => todo.isOverdue ? "red" : "white"};
  font-size: 1rem;
  outline: none;
  text-decoration: ${({todo}) => todo.isCompleted ? "line-through" : ""};
`;

const Input = (props: PropsInterface) => {
  const {todoItems, todo, i} = props
  let {dispatch} = useContext(Context)
  let [storedValue, setValue] = useLocalStorage()
  const args = {i, todoItems, todo, dispatch, storedValue, setValue}

  return (
	<StyledInput
	  {...props}
	  type="text"
	  // @ts-ignore
	  maxLength="20"
	  value={todo.content}
	  onKeyDown={e => (handleKeyDown({e: e, dispatch: dispatch, args: args}))}
	  onChange={e => dispatch(ActionCreator.input(e, args))}
	  onBlur={(e) => dispatch(ActionCreator.input(e, args))}
	/>
  )
}

export default Input
