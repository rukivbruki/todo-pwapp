import WithTodoTasks from "../../hoks/WithTodoTasks";

import TodoList from "../TodoList";

const MySecret = () => {
  const group = "my-secret";
  return (WithTodoTasks(group, TodoList))
}

export default MySecret
