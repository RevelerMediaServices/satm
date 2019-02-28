import Layout from "../components/Layout";

import styled from "styled-components";

import NextSeo from "next-seo";

import { Row, Col } from "reactstrap";

import imgHaystacks from "../static/images/santaBakingHaystacks.jpg";
import imgIsAbout from "../static/images/christmasIsAbout.jpg";
import imgMovie from "../static/images/movieTheatre.png";
import imgMrsEating from "../static/images/mrsSantaEating.jpg";
import imgDancing from "../static/images/santa&theMrsDancing.jpg";
import imgSelfie from "../static/images/santa&theMrsSelfie.jpg";
import imgIntro from "../static/images/bestOneSoFar.jpg";

const AboutDiv = styled.div`
  height: 85vh;

  h1 {
    font-family: "Cookie", cursive;
    font-size: 4.5vw;
    text-align: center;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-size: 2vw;
    text-align: center;
  }

  p {
    font-family: "Special Elite", cursive;
    font-size: 1vw;
    text-align: justify;
  }

  img {
    width: 10vw;
    float: right;
    margin: 1vw;
    outline: 0.15vw solid green;
    border: 0.4vw solid white;
  }

  #imgIntro {
    width: 13vw;
    float: left;
  }

  #imgIsAbout {
    width: 8vw;
    float: left;
  }

  #imgMovie {
    width: 15vw;
    float: right;
  }

  #imgHaystacks {
    width: 10vw;
    float: left;
  }

  #imgMrsEating {
    width: 9vw;
    float: right;
    margin-top: 0.3vw;
  }

  .satmQuotes {
    font-size: 1.8vw;
    border: 0.5vw double rgba(8, 192, 8, 1);
    background-color: rgba(192, 8, 8, 1);
    color: rgba(8, 192, 8, 1);
    padding: 0.5vw;
    font-family: "Patrick Hand", cursive;
    font-variant: small-caps;
    text-align: center;
  }

  #bringingItRow {
    p {
      font-size: 1.4vw;
    }

    img {
      width: 100%;
    }
  }
`;

const About = () => (
  <Layout>
    <AboutDiv>
      <NextSeo
        config={{
          title: "Santa & the Mrs of West Texas",
          description: "Santa and Mrs Claus services for West Texas"
        }}
      />
      <h1>About Santa & the Mrs</h1>
      <Row>
        <Col>
          <h2>Meet Santa & the Mrs</h2>
          <p>
            With more than 40 years of the caring for and of the nuturing of the
            West Texas area, Santa & the Mrs' heart belong to the West Texas
            people. Living in an undisclosed &nbsp;
            <img
              src={imgIntro}
              id="imgIntro"
              alt="Santa & the Mrs of West Texas"
            />{" "}
            location in central West Texas, Santa & the Mrs Introduction Image
            of Santa & the Mrsare more than happy to travel within the Permian
            Basin. Although Santa & the Mrs do have a $50 appearance fee, all
            fees and tips earned will be donated to Toys for Tots or other
            verified charity. Up to a 100% discount on the appearance fee for
            qualifying charities or good causes.
          </p>
        </Col>
        <Col>
          <h2>Why Do This?</h2>
          <p>
            <img
              src={imgIsAbout}
              id="imgIsAbout"
              alt="Who Christmas Is About"
            />{" "}
            the Mrs is often heard saying, "Santa, sometimes people forget the
            true meaning of Christmas." With this in mind, Santa & the Mrs of
            West Texas intend to make sure that each and every West Texan he or
            she meets will be reminded why all of us do this. Santa & the Mrs do
            this because the Christmas Spirit is meant to be Image of Santa &
            the Mrs at the Movie Theatre shared. Santa & the Mrs do this to meet
            the amazing&nbsp;
            <img
              src={imgMovie}
              alt="Santa & the Mrs at the Odessa Movie Theatre"
              id="imgMovie"
            />{" "}
            people of West Texas. Santa & the Mrs do this because, Mrs Santa,
            "It brings Joy to the people" of West Texas. Come be a part of our
            family!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Santa</h2>
          <p>
            Santa spends most of his time, when not at work with the elves,
            Image of Santa Baking Cookies spending&nbsp;
            <img
              src={imgHaystacks}
              id="imgHaystacks"
              alt="Santa Baking Cookies"
            />{" "}
            and enjoying time with the Mrs. Little known fact about Santa is he
            not only enjoys eating cookies, but Santa also loves to bake
            cookies. If one is really lucky and good, he or she may be treated
            with one of Santa's amazing Buck Eyes or maybe one of His nummy
            Haystacks or Special Ks or the perfectly fluffy peanut brittle.
          </p>
          <blockquote className="satmQuotes">
            Santa says, "Bake Cookies, Enjoy Family & Be Good."
          </blockquote>
        </Col>
        <Col>
          <h2>the Mrs</h2>
          <p>
            With a deep seated faith in God and with a passionate&nbsp;
            <img
              src={imgMrsEating}
              id="imgMrsEating"
              alt="the Mrs Enjoying Barbeque"
            />{" "}
            loyatly to the Permian Basin, the Mrs has dedicated her life to the
            caring and to the nuturing of others. the Mrs raised two outstanding
            and successful children while devoting herself to bringing new life
            to the world as an OBGYN nurse at Women's and Children's Hospital in
            Odessa. Now retired the Mrs spends most of her time fattening up
            Santa and playing with the reindeer.
          </p>

          <blockquote className="satmQuotes">
            the Mrs says, "Love you, Have a Merry Christmas"
          </blockquote>
        </Col>
      </Row>
      <Row id="bringingItRow">
        <Col lg={3}>
          <img src={imgDancing} alt="Santa & the Mrs of West Texas" />
        </Col>
        <Col lg={6}>
          <h2>Bringing It All Together</h2>
          <p>
            With a small appearance fee of 50 dollars, that can be waived and if
            not will be donated to a verifed and worthy cause, Santa & the Mrs
            will entertain the children, bring Joy to older and spread the true
            meaning of Christas to all. With more than 40 years of dedicated
            service to West Texas, Santa & the Mrs strive to add real value to
            the Permian Basin.
          </p>
        </Col>
        <Col lg={3}>
          <img src={imgSelfie} alt="Santa & the Mrs of West Texas" />
        </Col>
      </Row>
    </AboutDiv>
  </Layout>
);

export default About;
