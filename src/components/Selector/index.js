import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreator} from "../../reduser";
import {groupKeys} from "../../services/initialData";
import {useLocalStorage} from "../../services/useLocalStorage";
import 'antd/dist/antd.css';
import {Select} from 'antd';


const Selector = (props) => {
  const {Option} = Select;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {todoItems, todo, i} = props
  const [storedValue, setValue] = useLocalStorage()
  const args = {i, state, todoItems, todo, dispatch, storedValue, setValue}
  return (
	<Select
	  showSearch
	  // placeholder="Выберите группу"
	  optionFilterProp="children"
	  onChange={(value) => dispatch(ActionCreator.changeGroup(value, args))}
	  filterOption={(input, option) =>
		option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
	  }
	>
	  {groupKeys.filter((value) => value !== todo.group).map((value, i) => (
		<Option key={i} value={value}>{value}</Option>)
	  )}
	</Select>
  )
}

export default Selector
