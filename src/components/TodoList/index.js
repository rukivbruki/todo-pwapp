import React, {useContext} from "react";
import {Context} from "../../services/сontextCreater";
import {DragDropContext} from "react-beautiful-dnd";
import {useLocalStorage} from "../../services/useLocalStorage";
import {saveStorageState} from "../../reduser";

import Form from "../Form";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  
  return result;
};

const TodoList = (props) => {
  const {todoItems} = props
  const {dispatch} = useContext(Context);
  let [storedValue, setValue] = useLocalStorage()
  
  const onDragEnd = (result) => {
	
	if (!result.destination) {
	  return;
	}
	
	const reorderedTodo = reorder(
	  todoItems,
	  result.source.index,
	  result.destination.index
	);
	dispatch({
	  type: "UPDATE",
	  payload: reorderedTodo
	});
	saveStorageState(reorderedTodo, storedValue, setValue)
  }
  
  return (
	<DragDropContext onDragEnd={onDragEnd}>
	  <Form todoItems={todoItems}/>
	</DragDropContext>
  );
}

export default TodoList;
