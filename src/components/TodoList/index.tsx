import React, {useContext} from "react";
import {Context} from "../../services/сontextCreater";
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useLocalStorage} from "../../services/useLocalStorage";
import {saveStorageState} from "../../reduser";
import {PropsInterface, TodoInterface} from "../../services/interfaces";

import Form from "../Form";

const reorder = (list: TodoInterface[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TodoList = (props: PropsInterface) => {
  const {todoItems} = props
  const {dispatch} = useContext(Context);
  let [storedValue, setValue] = useLocalStorage()

  const onDragEnd = (result: DropResult) => {

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
	  <Form {...props}/>
	</DragDropContext>
  );
}

export default TodoList;
