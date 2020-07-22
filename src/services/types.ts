import {ActionType} from "../reduser";
import {StateInterface, TodoInterface} from "./interfaces";

interface Update {
  type: ActionType.UPDATE,
  payload: TodoInterface[]
}

interface SetCompletedStatus {
  type: ActionType.SET_COMPLETED_STATUS,
  payload: TodoInterface[]
}

interface Input {
  type: ActionType.INPUT,
  payload: TodoInterface[]
}

interface CreateNewTodos {
  type: ActionType.CREATE_NEW_TODOS,
  payload: TodoInterface[]
}

interface RemoveTodo {
  type: ActionType.REMOVE_TODO,
  payload: TodoInterface[]
}

interface SetDeadline {
  type: ActionType.SET_DEADLINE,
  payload: TodoInterface[]
}

interface Initial {
  type: ActionType.INITIAL,
  payload: boolean
}

interface ChangeGroup {
  type: ActionType.CHANGE_GROUP,
  payload: StateInterface
}

export type Payload =
  TodoInterface[]
  | StateInterface
  | boolean
export type ActionTypes =
  Update
  | SetCompletedStatus
  | Input
  | CreateNewTodos
  | RemoveTodo
  | SetDeadline
  | Initial
  | ChangeGroup
