import Link from "next/link";

import { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import styled from "styled-components";

import navbarBrandLogo from "../static/graphics/logo.png";

const NavBarDiv = styled.div`
  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .navbar-nav > li {
    display: block;
    float: none;
  }

  @media (min-width: 768px) {
    .navbar-nav {
      float: none;
      margin: 0 auto;
      display: block;
      text-align: center;
    }

    .navbar-nav > li {
      display: inline-block;
      float: none;
    }
  }

  .navbarBrandLogo {
    img {
      width: 5vw;
      margin-left: 5vw;
    }
  }
`;

export default class Navbar1 extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <NavBarDiv>
        <Navbar color="faded" light expand="lg">
          <NavbarBrand href="/" className="navbarBrandLogo mr-auto">
            <img
              src={navbarBrandLogo}
              alt="Santa & the Mrs of West Texas Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarDiv>
    );
  }
}