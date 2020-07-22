import WithTodoTasks from "../../hoks/WithTodoTasks";

import TodoList from "../TodoList";

const MainPage = () => {
  const group = "all";
  return (WithTodoTasks(group, TodoList))
}

export default MainPage

