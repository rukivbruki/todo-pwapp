export interface TodoInterface {
  content: string,
  isCompleted: boolean,
  id: string,
  group: string,
  deadline: string,
  isOverdue: boolean
}

export interface StateInterface {
  [key: string]: boolean | TodoInterface[];

  // loading: boolean
}

export interface PropsInterface {
  i: number,
  todoItems: TodoInterface[],
  todo: TodoInterface,
  storedValue: StateInterface,

}

export interface ArgsInterface<T> extends PropsInterface {
  setValue(args: T): T
}
