import moment from "moment"
import {setGroup} from "../reduser/reducer";

const generateUnicueId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

const calculagteDate = (end) => {
  const now = moment(new Date());
  
  const duration = moment.duration(now.diff(end));
  return -duration.asDays()
}

const onfocusListElement = (i = 1) => {
  setTimeout(() => {
	const target = document.querySelector('ul');
	target.childNodes[i].childNodes[1].focus()
  }, 0);
}

export {generateUnicueId, calculagteDate, onfocusListElement}
