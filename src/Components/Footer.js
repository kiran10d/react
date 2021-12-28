import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FooterLogo from "../Assets/footer-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaSkype, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col>
            <img
              src={FooterLogo}
              className="footerlogo"
              alt="React Bootstrap logo"
            />
            <h5>Track Your Time</h5>
            <p>Free time tracking for remote teams</p>
          </Col>
          <Col>
            <h5>Software</h5>
            <p>Overview</p>
            <p>Time Tracking</p>
            <p>Employee Productivity</p>
            <p>Employee Monitoring</p>
          </Col>
          <Col>
            <h5>Coming Soon</h5>
            <p>JIRA Integration</p>
            <p>ASANA Integration</p>
          </Col>
          <Col>
            <div className="faicon">
              <i className="falinkedin">
                <FaLinkedinIn />
              </i>
              <i className="faskype">
                <FaSkype />
              </i>
              <i className="fatwitter">
                <FaTwitter />
              </i>
            </div>
            <div>
              <p>For any enquiries, please drop an email to</p>
              <a href="mailto:admin@clockmonk.com" className="footermail">
                admin@clockmonk.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

// Styled Components
const StyledFooter = styled.footer`
  background-color: #232736;
  padding: 30px 0px 30px 0px;
  h5,
  p {
    color: white;
    text-align: left;
  }
  .footerlogo {
    display: block;
    padding-bottom: 20px;
  }

  .footermail {
    padding: 1px 9px 5px 10px;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #ffffff24;
    border-radius: 12px;
    color: aliceblue;
    text-decoration: none;
    margin-left: -60px;
  }

  .faicon i {
    color: white;
    font-size: 25px;
    border-radius: 5px;
    margin-right: 10px;
    padding: 10px;
    display: inline-flex;
  }

  .faicon {
    text-align: left;
    padding-bottom: 10px;
  }

  .faskype {
    background-color: #00aff0;
  }

  .falinkedin {
    background-color: #0077b5;
  }

  .fatwitter {
    background-color: #1da1f2;
  }
`;
export default Footer;
