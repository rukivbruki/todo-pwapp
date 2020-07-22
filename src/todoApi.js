import {initialData} from "./services/initialData";

const todoApi = () => {
  return new Promise((resolve, reject) => {
	setTimeout(() => {
	  initialData ?
		resolve(initialData) :
		reject(() => console.log('Тут Какая то ошибка 😞'));
	}, 2000);
  });
};

export {todoApi}

