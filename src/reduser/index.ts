import {calculagteDate, onfocusListElement} from "../services/utils";
import {createEmptyTodo} from "../services/initialData";
import {ArgsInterface, StateInterface} from "../services/interfaces";
import {ChangeEvent, Dispatch, KeyboardEvent} from "react";
import {ActionTypes, Payload} from "../services/types";

let initialData = {}

enum ActionType {
  UPDATE = `UPDATE`,
  SET_COMPLETED_STATUS = `SET_COMPLETED_STATUS`,
  INPUT = `INPUT`,
  CREATE_NEW_TODOS = `CREATE_NEW_TODOS`,
  REMOVE_TODO = `REMOVE_TODO`,
  SET_DEADLINE = `SET_DEADLINE`,
  INITIAL = `INITIAL`,
  CHANGE_GROUP = `CHANGE_GROUP`
}

const setGroup = (payload: Payload): string => Array.isArray(payload) ? payload[0].group : ""
let saveStorageState = (
  state: Exclude<Payload, boolean>,
  storedValue: StateInterface,
  setValue: (value: StateInterface) => void
) => {
  Array.isArray(state) ? setValue({...storedValue, [setGroup(state)]: state}) : setValue(state)
}

interface HandleKeyDownParams {
  e: KeyboardEvent<HTMLInputElement>;
  dispatch: Dispatch<{ payload: Payload; type: string; }>;
  args: ArgsInterface<Payload>;
}

const handleKeyDown = (
  {e, dispatch, args}: HandleKeyDownParams) => {
  const {i, todoItems} = args
  switch (e.key) {
	case 'Enter':
	  dispatch(ActionCreator.createTodo(args));
	  break;
	case 'Alt':
	  dispatch(ActionCreator.setCompletedStatus(args));
	  break;
	case 'Backspace':
	  if (i === 0 && todoItems.length === 1) return;
	  if (todoItems[i].content === '') {
		e.preventDefault();
		return dispatch(ActionCreator.removeTodo(args));
	  }
  }
}

const ActionCreator = {
  changeGroup: (value: string, state: StateInterface, args: ArgsInterface<Payload>): ActionTypes => {
	const {i, todoItems, storedValue, setValue} = args
	const [todosItems, oldGroup, oldTodo] = [{...state}, [...todoItems], [...todoItems][i]]
	oldTodo.group = value
	const newGroup = todosItems[value];
	if (typeof newGroup !== "boolean") {
	  newGroup.splice(i + 1, 0, oldTodo)
	}
	const newTodos = {...todosItems, [setGroup(newGroup)]: newGroup};
	const firstTodos = oldGroup.slice(0, i).concat(oldGroup.slice(i + 1, oldGroup.length));
	const newState = {...newTodos, [setGroup(firstTodos)]: firstTodos};
	saveStorageState(newState, storedValue, setValue)
	return {
	  type: ActionType.CHANGE_GROUP,
	  payload: newState,
	};
  },
  setCompletedStatus: (args: ArgsInterface<Payload>): ActionTypes => {
	const {i, todoItems, storedValue, setValue} = args
	let newTodos = [...todoItems];
	newTodos[i].isCompleted = !newTodos[i].isCompleted;
	saveStorageState(newTodos, storedValue, setValue)
	return {
	  type: ActionType.SET_COMPLETED_STATUS,
	  payload: newTodos,
	};
  },
  input: (e: ChangeEvent<HTMLInputElement>, args: ArgsInterface<Payload>): ActionTypes => {
	const {i, todoItems, storedValue, setValue} = args
	let newTodos = [...todoItems];
	newTodos[i].content = e.target.value;
	saveStorageState(newTodos, storedValue, setValue)
	return {
	  type: ActionType.INPUT,
	  payload: newTodos,
	};
  },
  createTodo: (args: ArgsInterface<Payload>): ActionTypes => {
	const {i, todoItems, storedValue, setValue} = args
	onfocusListElement(i + 1)
	const [newTodos, newTodo] = [[...todoItems], createEmptyTodo()]
	newTodo.group = setGroup(todoItems)
	newTodos.splice(i + 1, 0, newTodo);
	saveStorageState(newTodos, storedValue, setValue)
	return {
	  type: ActionType.CREATE_NEW_TODOS,
	  payload: newTodos,
	};
  },
  removeTodo: (args: ArgsInterface<Payload>): ActionTypes => {
	const {i, todoItems} = args
	onfocusListElement(i - 1)
	let newTodos = todoItems.slice(0, i).concat(todoItems.slice(i + 1, todoItems.length));
	return {
	  type: ActionType.REMOVE_TODO,
	  payload: newTodos,
	};
  },
  setDeadline: (args: ArgsInterface<Payload>, dateString: string): ActionTypes => {
	const {i, todoItems, storedValue, setValue} = args
	let newTodos = [...todoItems];
	newTodos[i].isOverdue = calculagteDate(dateString) < 3
	newTodos[i].deadline = dateString
	saveStorageState(newTodos, storedValue, setValue)
	return {
	  type: ActionType.SET_DEADLINE,
	  payload: newTodos,
	};
  },
  initial: (pending: boolean, result: StateInterface): ActionTypes => {
	initialData = result
	return {
	  type: ActionType.INITIAL,
	  payload: pending,
	};
  },
}

const reducer = (state: {} = initialData, action: { payload: Payload; type: string; }) => {
  let group = setGroup(action.payload)

  switch (action.type) {
	case ActionType.UPDATE:
	  return {...state, [group]: action.payload}
	case ActionType.SET_COMPLETED_STATUS:
	  return {...state, [group]: action.payload}
	case ActionType.INPUT:
	  return {...state, [group]: action.payload}
	case ActionType.CREATE_NEW_TODOS:
	  return {...state, [group]: action.payload}
	case ActionType.REMOVE_TODO:
	  return {...state, [group]: action.payload}
	case ActionType.SET_DEADLINE:
	  return {...state, [group]: action.payload}
	case ActionType.INITIAL:
	  return {...state, loading: action.payload}
	case ActionType.CHANGE_GROUP:
	  return state = action.payload
	default:
	  return state;
  }
}

export {
  ActionType,
  ActionCreator,
  reducer,
  handleKeyDown,
  saveStorageState
};
