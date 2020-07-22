import Index from "../../hoks/WithTodoTasks";
import TodoList from "../../components/TodoList";

const DailyDoings = () => {
  const group = "daily-doings";
  return (Index(group, TodoList))
}

export default DailyDoings
