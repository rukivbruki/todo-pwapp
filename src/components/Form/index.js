import React from "react";
import {useSelector} from "react-redux";
import List from "../List"
import styled from 'styled-components';

const StyledForm = styled.form`
  color: white;
`;

const Loader = styled.div`
  text-align: center;
`;

const Form = (props) => {
  console.log("Form", props)
  const state = useSelector(state => state);
  
  return (
	<StyledForm
	  id="form">
	  {!state.loading && (<List {...props}/>)}
	  {state.loading && (<Loader role="alert">Loading please wait...</Loader>
	  )}
	</StyledForm>
  )
}

export default Form
