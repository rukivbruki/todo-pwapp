import React, {Fragment} from "react";
import logo from "../../logo.svg";
import styled from 'styled-components';

import Navigation from "../Navigation";

const Index = styled.div`
  grid-area: header;
`;
const Main = styled.main`
  grid-area: main;
`;
const Header = styled.div`
  display: grid;
  justify-items: center;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 20vmin;
  pointer-events: none;
  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export default ({children}: JSX.ElementChildrenAttribute) => {
  return (
	<Fragment>
	  <Index>
		<Header>
		  <Logo src={logo} alt="logo"/>
		  <Navigation/>
		</Header>
	  </Index>
	  <Main>{children}</Main>
	</Fragment>
  );
};
