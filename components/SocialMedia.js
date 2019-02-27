import Link from "next/link";

import styled from "styled-components";

import { FaFacebookF, FaPhone } from "react-icons/fa";

import { GoCalendar } from "react-icons/go";

const SocialMediaDiv = styled.div`
  position: absolute;
  top: 50vh;
  left: 23vw;

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    width: 5vw;
    height: 5vw;
    display: block;
    margin: 0 0.75vw;
    border-radius: 50%;
    padding-top: 0.9vw;
    padding-left: 1.1vw;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: 0.3vw 0.3vw 1.2vw 0.3vw rgba(0, 0, 0, 1);
    background: linear-gradient(0deg, #ddd, #fff);
    transition: 0.75s;
    color: rgba(192, 8, 8, 1);

    font-size: 2.5vw;
  }

  ul li a:hover {
    box-shadow: 0 0.05vw 0.125vw rgba(0, 0, 0, 0.3);
    color: rgba(8, 80, 8, 1);
  }

  ul li a .fa {
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(0deg, #fff, #ddd);
    border-radius: 50%;
    line-height: calc(6vw - 1.25vw);
    font-size: 2.5vw;
    color: white;
    transition: 0.5s;
  }
`;

const SocialMedia = () => (
  <SocialMediaDiv>
    <ul>
      <li>
        <a href="https://www.facebook.com/revelermusicllc/" className="fa">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/revelermusicllc/" className="fa">
          <FaPhone />
        </a>
      </li>
      <li>
        <Link href={process.env.BACKEND_URL + "/contact"}>
          <a className="fa">
            <GoCalendar />
          </a>
        </Link>
      </li>
    </ul>
  </SocialMediaDiv>
);

export default SocialMedia;
