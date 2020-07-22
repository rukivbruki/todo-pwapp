import WithTodoTasks from "../../hoks/WithTodoTasks";

import TodoList from "../TodoList";

const DailyDoings = () => {
  const group = "daily-doings";
  return (WithTodoTasks(group, TodoList))
}

export default DailyDoings
