import {initialData} from "./services/initialData";
import {StateInterface} from "./services/interfaces";

const todoApi = (): Promise<StateInterface> => {
  return new Promise((resolve, reject) => {
	setTimeout(() => {
	  initialData ?
		resolve(initialData) :
		reject(() => console.log('Тут Какая то ошибка 😞'));
	}, 2000);
  });
};

export {todoApi}

