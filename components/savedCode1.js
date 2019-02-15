import { Component } from "react";
import Link from "next/link";

import styled from "styled-components";

import { ButtonGroup, Button } from "reactstrap";

import { FaFacebookF, FaPhone } from "react-icons/fa";

import { GoCalendar } from "react-icons/go";

const NavButtonGroupDiv = styled.div`
  border: 1px solid #000;
  box-shadow: -1px 1px #000, -2px 2px #000, -3px 3px #000, -4px 4px #000,
    -5px 5px #000;
  padding-top: 0.5em;
  padding-right: 0.2em;
  border-radius: 25px;
  background-color: rgba(0, 88, 0, 0.7);
  mix-blend-mode: multiply;

  .divForBorder {
  }

  a {
    font-size: 200%;
    color: red;
    padding: 0.3em;
  }

  .navButtonButton {
    background-color: none;
  }
`;

export default class NavButtonGroup extends Component {
  render() {
    const links = [
      {
        id: 2,
        name: "Contact",
        url: "/contact"
      },
      {
        id: 3,
        name: "Calendar",
        url: "/calendar"
      },
      {
        id: 4,
        name: "Call",
        url: "Phone"
      }
    ];

    return (
      <NavButtonGroupDiv className="">
        <div id="divForBorder">
          <a href="https://www.facebook.com/revelermusicllc/" className="">
            <FaFacebookF />
          </a>
          <a href="https://www.facebook.com/revelermusicllc/" className="">
            <FaPhone />
          </a>
          <a href="https://www.facebook.com/revelermusicllc/" className="">
            <GoCalendar />
          </a>
        </div>
      </NavButtonGroupDiv>
    );
  }
}
