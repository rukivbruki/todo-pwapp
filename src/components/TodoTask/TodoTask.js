import React, {useContext} from "react";
import {Draggable} from "react-beautiful-dnd";
import Input from "../Input/Input";
import DatePicker from "antd/es/date-picker";
import Selector from "../Selector/Selector"
import styled from 'styled-components';
import moment from "moment";
import {ActionCreator} from "../../reduser/reducer";
import {Context} from "../../services/сontextCreater";
import {useLocalStorage} from "../../services/useLocalStorage";

import Checkbox from "../Checkbox/Checkbox";


const StyledToTask = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 4fr);
  gap: 10px;
`;

const TodoTask = (props) => {
  const {todoItems, todo, i} = props
  let [storedValue, setValue] = useLocalStorage()
  let {dispatch} = useContext(Context)
  const args = {i, todoItems, storedValue, setValue}
  const setDate = (_, dateString) => {
	dispatch(ActionCreator.setDeadline(args, dateString));
  }
  return (
	<Draggable key={todo.id} draggableId={todo.id} index={i}>
	  {provided => (
		<StyledToTask
		  ref={provided.innerRef}
		  {...provided.draggableProps}
		  {...provided.dragHandleProps}
		>
		  <Checkbox {...props}/>
		  <Input {...props} todo={todo} i={i}/>
		  <Selector {...props} todo={todo} i={i}/>
		  <DatePicker
			defaultValue={todo.deadline ? moment(todo.deadline) : ""}
			onChange={setDate}
		  />
		</StyledToTask>
	  )}
	</Draggable>
  )
}

export default TodoTask
