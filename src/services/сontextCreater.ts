import {createContext, Dispatch} from "react";
import {StateInterface} from "./interfaces";
import {Payload} from "./types";
import {initialData} from "./initialData";

interface ContextInterface {
  readonly state: StateInterface,
  dispatch: Dispatch<{ payload: Payload; type: string; }>
}

export const Context = createContext<ContextInterface>({
  state: initialData,
  dispatch: () => {}
});
