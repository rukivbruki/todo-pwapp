import React from "react";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../../reduser";
import {useLocalStorage} from "../../services/useLocalStorage";
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: ${todo => todo.isCompleted ? "50%" : "100%"};
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  transition: background-color .2s ease-in-out;
  border: 1px solid #fff;
  color: ${props => props.todo.isCompleted ? "#d60000" : ""};
  background: ${props => props.todo.isCompleted ? "#fcf7a1" : ""};
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0);
  }

  &:after {
     content: '•••';
     position: absolute;
     color: white;
     top: 50%;
     right: 5px;
     transform: translate(-50%, -50%) rotate(90deg);
     font-size: 6px;
     letter-spacing: 4px;
     margin-top: 2px;
  }
`;

const Checkbox = (props) => {
  const {todoItems, todo, i} = props
  let [storedValue, setValue] = useLocalStorage()
  const dispatch = useDispatch();
  const args = {i, todoItems, storedValue, setValue}
  return (
	<StyledCheckbox {...props}
					onClick={() => dispatch(ActionCreator.setCompletedStatus(args))}
	>
	  {todo.isCompleted && (<span>&#x2714;</span>)}
	</StyledCheckbox>
  )
}

export default Checkbox
