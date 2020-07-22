import Index from "../../hoks/WithTodoTasks";
import TodoList from "../../components/TodoList";

const MySecret = () => {
  const group = "my-secret";
  return (Index(group, TodoList))
}

export default MySecret
