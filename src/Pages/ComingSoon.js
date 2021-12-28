import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComingSoonImg from "../Assets/comming-soon.png";
import styled from "styled-components";

function comingsoon() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledCoSoon>
              <h2>Coming Soon..</h2>
              <p>
                We are upgrading our website to provide the best user
                experience.
              </p>
              <img src={ComingSoonImg} alt="Comingsoon" />
            </StyledCoSoon>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// Styled Components
const StyledCoSoon = styled.div`
  h2 {
    padding-top: 30px;
    text-align: center;
  }
  p {
    text-align: center;
    color: black;
  }
  img {
    width: 40%;
  }
`;
export default comingsoon;
