import React, {useContext} from "react";
import {Context} from "../../services/сontextCreater";

const WithTodoTasks = (group, WrappedComponent) => {
  let {state} = useContext(Context)
  const todoItems = state[group]
    console.log("WithTodoTasks", todoItems)

  return (
	<WrappedComponent todoItems={todoItems} />
  )
}

export default WithTodoTasks
