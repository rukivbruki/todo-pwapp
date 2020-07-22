import {generateUnicueId} from "./utils";

const createEmptyTodo = () => {
  let id = generateUnicueId()
  return {
	content: '',
	isCompleted: false,
	id: id,
	group: "",
	deadline: "",
	isOverdue: false
  }
}

const groupKeys = ["all", "daily-doings", "my-secret"]
const initialData = {
  [groupKeys[0]]: [
	{
	  content: 'Задача 1',
	  isCompleted: true,
	  id: generateUnicueId(),
	  group: groupKeys[0],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 2',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[0],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 3',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[0],
	  deadline: "",
	  isOverdue: false
	},
  ],
  [groupKeys[1]]: [
	{
	  content: 'Задача 4',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[1],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 5',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[1],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 6',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[1],
	  deadline: "",
	  isOverdue: false
	},
  ],
  [groupKeys[2]]: [
	{
	  content: 'Задача 7',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[2],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 8',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[2],
	  deadline: "",
	  isOverdue: false
	},
	{
	  content: 'Задача 9',
	  isCompleted: false,
	  id: generateUnicueId(),
	  group: groupKeys[2],
	  deadline: "",
	  isOverdue: false
	},
  ],
  loading: true
}

export {groupKeys, initialData, createEmptyTodo}
