import { Component } from "react";
import Link from "next/link";

import styled from "styled-components";

import { ButtonGroup, Button } from "reactstrap";

import { FaFacebookF } from "react-icons/fa";

const NavButtonGroupDiv = styled.div`
  .navButtonButton {
    width: 6vw;
  }

  .navlinkColor {
    a {
      color: red;
    }
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
      <NavButtonGroupDiv>
        <ButtonGroup vertical>
          <Button className="navButtonButton" type="button">
            <a
              href="https://www.facebook.com/revelermusicllc/"
              className="nav-link navlinkColor"
            >
              <FaFacebookF />
            </a>
          </Button>
          {links.map(link => (
            <Button className="navButtonButton" key={link.id} type="button">
              <Link
                prefetch
                href={link.url}
                as={process.env.BACKEND_URL + link.url}
              >
                <a className="nav-link navlinkColor">{link.name}</a>
              </Link>
            </Button>
          ))}
        </ButtonGroup>

        
    <Typing className="typingDiv1">
    <h1>
      Bringing Joy and Presents
      <br />
      to the Permian Basin.
    </h1>
  </Typing>
      </NavButtonGroupDiv>
    );
  }
}
