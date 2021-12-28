import React, { Component } from "react";
import ReactDOM from "react-dom";
import Whatsapp from "../Assets/whatsapp.png";
import styled from "styled-components";

class WhatsApp extends Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <a href="https://wa.me/+919445916002" target="_blank" rel="noreferrer">
          <StyledImg src={Whatsapp} alt="Whatsapp logo" />
        </a>
      </>,
      document.getElementById("portal")
    );
  }
}
// Styled Components
const StyledImg = styled.img`
  position: fixed;
  bottom: 10px;
  float: right;
  left: 95%;
  max-width: 4%;
`;
export default WhatsApp;
