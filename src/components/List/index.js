import React from "react";
import {Droppable} from "react-beautiful-dnd";
import styled from 'styled-components';

import Index from "../TodoTask";

const StyledList = styled.ul`
  display: grid;
  gap: 10px;
  padding: 0;
`;

const List = (props) => {
  const {todoItems} = props
  console.log("List", todoItems)
  return (
	<Droppable droppableId="list">
	  {provided => (
		<StyledList  {...provided.droppableProps}
					 ref={provided.innerRef}>
		  {todoItems.map((todo, i) => (
			<React.Fragment key={todo.id}>
			  <Index {...props} todo={todo} i={i}/>
			</React.Fragment>
		  ))}
		  {provided.placeholder}
		</StyledList>
	  )}
	</Droppable>
  )
}

export default List
