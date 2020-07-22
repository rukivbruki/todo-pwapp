import React, {useContext} from "react";
import {Context} from "../../services/сontextCreater";

const WithTodoTasks = (group: string, WrappedComponent: any) => {
  let {state} = useContext(Context)
  const todoItems = state[group]
  return (
	<WrappedComponent todoItems={todoItems}/>
  )
}

export default WithTodoTasks
