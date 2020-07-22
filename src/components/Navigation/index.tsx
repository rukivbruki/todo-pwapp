import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: grid;
  justify-items: center;
  text-transform: uppercase;
    &~ {
  color: aliceblue;
  }
`;

const Navigation = () => {
  return (
	<StyledNavigation>
	  <Link to="/">Важные дела</Link>
	  <Link to="daily-doings">Дела на сегодня</Link>{" "}
	  <Link to="my-secret">Секретные дела</Link>
	</StyledNavigation>
  )
}

export default Navigation
