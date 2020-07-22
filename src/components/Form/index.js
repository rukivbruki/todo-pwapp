import React, {useContext} from "react";
import styled from 'styled-components';
import {Context} from "../../services/сontextCreater";

import List from "../List"

const StyledForm = styled.form`
  color: white;
`;

const Loader = styled.div`
  text-align: center;
`;

const Form = (props) => {
  console.log("Form", props)
  let {state} = useContext(Context)
  
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
