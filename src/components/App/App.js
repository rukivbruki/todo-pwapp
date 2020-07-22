import React, {useEffect, useReducer} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styled, {createGlobalStyle} from 'styled-components';
import Layout from "../Layout/Layout";
import {reducer} from "../../reduser/reducer";
import {Context} from "../../services/сontextCreater";
import {useAsync} from "../../services/useAsync";
import {useLocalStorage} from "../../services/useLocalStorage";
import {todoApi} from "../../todoApi";

import MainPage from "../MainPage/MainPage";
import DailyDoings from "../DailyDoings/DailyDoings";
import MySecret from "../MySecret/MySecret";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: auto;
    color: rgb(46, 68, 78);
    background-image: linear-gradient(to top,rgb(56, 59, 73) 40%,rgb(97, 218, 251) 100%);
    background-attachment: fixed;
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  }
  
  a {
    color: #bac0c6;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.6s;
    &:hover{
    color: #fcf7a1;
    }
}
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-areas: ". header ." ". main .";
	justify-content: center;
	align-items: center;
	gap: 3rem;
	padding: 10px;
`;

const App = () => {
  // window.localStorage.removeItem("store")
  let [storedValue, setValue] = useLocalStorage()
  let [state, dispatch] = useReducer(reducer, storedValue);
  console.log("App", state)
  const {execute} = useAsync(dispatch, todoApi, false);
  useEffect(() => {
	execute()
  }, [execute])
  
  return (
	<Context.Provider value={{state, dispatch}}>
	  <GlobalStyle/>
	  <Wrapper>
		<Router>
		  <Layout>
			<Switch>
			  <Route path="/" exact component={MainPage}/>
			  <Route path="/daily-doings" exact component={DailyDoings}/>
			  <Route path="/my-secret" exact component={MySecret}/>
			  <Route
				render={() => (
				  <h1>
					404 ошибка
					<br/>
					<small>Page not found</small>
				  </h1>
				)}
			  />
			</Switch>
		  </Layout>
		</Router>
	  </Wrapper>
	</Context.Provider>
  )
}

export default App
