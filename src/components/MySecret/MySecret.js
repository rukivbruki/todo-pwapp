import React from "react";

import WithTodoTasks from "../../hoks/WithTodoTasks/WithTodoTasks";
import TodoList from "../../components/TodoList/TodoList";

const MySecret = () => {
  const group = "my-secret";
  return (WithTodoTasks(group, TodoList))
}

export default MySecret
