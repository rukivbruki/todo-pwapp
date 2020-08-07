import React from "react";
import {useSelector} from "react-redux";

const WithTodoTasks = (group, WrappedComponent) => {
  const state = useSelector(state => state);
  console.log("WithTodoTasks", state)
  const todoItems = state[group]

  return (
	<WrappedComponent todoItems={todoItems} />
  )
}

export default WithTodoTasks
