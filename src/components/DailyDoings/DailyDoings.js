import React from "react";

import WithTodoTasks from "../../hoks/WithTodoTasks/WithTodoTasks";
import TodoList from "../../components/TodoList/TodoList";

const DailyDoings = () => {
  const group = "daily-doings";
  return (WithTodoTasks(group, TodoList))
}

export default DailyDoings
