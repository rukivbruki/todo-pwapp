import React, {useContext} from "react";
import styled from 'styled-components';
import {ActionCreator, handleKeyDown} from "../../reduser";
import {Context} from "../../services/сontextCreater";
import {useLocalStorage} from "../../services/useLocalStorage";

const StyledInput = styled.input`
  min-width: 172px;
  border: none;
  background: transparent;
  color: ${({todo}) => todo.isOverdue ? "red" : "white"};
  font-size: 1rem;
  outline: none;
  text-decoration: ${({todo}) => todo.isCompleted ? "line-through" : ""};
`;

const Input = (props) => {
  const {todoItems, todo, i} = props
  let {dispatch} = useContext(Context)
  let [storedValue, setValue] = useLocalStorage()
  const args = {i, todoItems, todo, dispatch, storedValue, setValue}
  
  return (
	<StyledInput
	  {...props}
	  type="text"
	  maxLength="20"
	  value={todo.content}
	  onKeyDown={e => (handleKeyDown(e, args))}
	  onChange={e => dispatch(ActionCreator.input(e,args))}
	  onBlur={(e) => dispatch(ActionCreator.input(e,args))}
	/>
  )
}

export default Input
