import moment from "moment"

const generateUnicueId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;
const calculagteDate = (end: moment.MomentInput) => {
  const now = moment(new Date());

  const duration = moment.duration(now.diff(end));
  return duration.asDays()
}
const onfocusListElement = (i = 1) => {
  setTimeout(() => {
	const target = document.querySelector('ul');
	if (target !== null) {
	  target.childNodes[i].childNodes[1].focus()
	}
  }, 0);
}

export {generateUnicueId, calculagteDate, onfocusListElement}
