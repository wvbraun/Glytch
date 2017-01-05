import React, { PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar inverse staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Glytch</IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
    </Navbar>
  );
};

export default Header;
