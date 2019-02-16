import Link from "next/link";

import { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  ButtonGroup,
  Container
} from "reactstrap";

import styled from "styled-components";

import logo from "../static/images/logo.png";

const NavBarDiv = styled.div`
  background-color: yellow;
  height: 15vh;

  .navbar-nav {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;

    a {
      font-weight: 800;
      font-size: 200%;
    }
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

  #navbarLogoDiv {
    img {
      width: 6em;
      position: fixed;
      top: 1em;
      left: 17vw;
    }
  }

  .customButtonWidth {
    width: 12vw;
  }

  .customButtonGroup {
    background-color: rgba(0, 88, 0, 0.7);

    box-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
      2px 2px 0 #000;
  }

  .navlinkColor {
    color: #cc0000;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
      2px 2px 0 #000;
    letter-spacing: 3px;
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
        <div id="navbarLogoDiv">
          <img src={logo} alt="SatM Logo" />
        </div>

        <Navbar expand="lg" className="">
          <NavbarBrand
            href={process.env.BACKEND_URL + "/"}
            className="navbarBrandLogo mr-auto"
          />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="">
              <ButtonGroup className="btn-group-sm rounded-left customButtonGroup">
                <Button
                  type="button"
                  className="btn btn-outline-danger navbar-btn btn customButtonWidth"
                >
                  <Link href="/" as={process.env.BACKEND_URL + "/"}>
                    <a className="nav-link navlinkColor">Home</a>
                  </Link>
                </Button>

                <Button
                  type="button"
                  className="btn btn-outline-danger navbar-btn customButtonWidth"
                >
                  <Link
                    prefetch
                    href="/about"
                    as={process.env.BACKEND_URL + "/about"}
                  >
                    <a className="nav-link navlinkColor">About</a>
                  </Link>
                </Button>
                <Button
                  type="button"
                  className="btn btn-outline-danger navbar-btn customButtonWidth"
                >
                  <Link
                    prefetch
                    href="/calendar"
                    as={process.env.BACKEND_URL + "/calendar"}
                  >
                    <a className="nav-link navlinkColor">Calendar</a>
                  </Link>
                </Button>
                <Button
                  type="button"
                  className="btn btn-outline-danger navbar-btn customButtonWidth rounded-right"
                >
                  <Link
                    prefetch
                    href="/contact"
                    as={process.env.BACKEND_URL + "/contact"}
                  >
                    <a className="nav-link navlinkColor">Contact</a>
                  </Link>
                </Button>
              </ButtonGroup>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarDiv>
    );
  }
}
