import React from "react";

import WithTodoTasks from "../../hoks/WithTodoTasks/WithTodoTasks";
import TodoList from "../../components/TodoList/TodoList";

const MainPage = () => {
  const group = "all";
  return (WithTodoTasks(group, TodoList))
}

export default MainPage

