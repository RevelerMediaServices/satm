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

import navbarBrandLogo from "../static/images/logo.png";

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
    position: fixed;
    top: 1vw;
    left: 1vw;
    img {
      width: 5vw;
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
        <Navbar color="warning" light expand="lg">
          <NavbarBrand
            href="/"
            as={process.env.BACKEND_URL + "/"}
            className="navbarBrandLogo mr-auto"
          >
            <img
              src={navbarBrandLogo}
              alt="Santa & the Mrs of West Texas Logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href="/" as={process.env.BACKEND_URL + "/"}>
                  <a className="nav-link">Home</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
                  <a className="nav-link">About</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  href="/calendar"
                  as={process.env.BACKEND_URL + "/calendar"}
                >
                  <a className="nav-link">Calendar</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact" as={process.env.BACKEND_URL + "/contact"}>
                  <a className="nav-link">Contact</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarDiv>
    );
  }
}
