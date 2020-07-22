import Index from "../../hoks/WithTodoTasks";
import TodoList from "../../components/TodoList";

const MainPage = () => {
  const group = "all";
  return (Index(group, TodoList))
}

export default MainPage

