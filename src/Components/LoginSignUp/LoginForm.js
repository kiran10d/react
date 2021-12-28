import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { fadeRight } from "../../Animation";
import { motion } from "framer-motion";

// import { Redirect } from "react-router-dom";
// import { createBrowserHistory } from "history";
import styled from "styled-components";
import LoginBg from "../../Assets/login-bg.png";
import FormBg from "../../Assets/login-form.png";

// const LoginName = "kiran";
// const LoginPassword = "kirankumar";
// const history = createBrowserHistory();

function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });

  // const saved = localStorage.getItem("Data");
  // const initialValue = JSON.parse(saved)[0];

  // const inputName = initialValue.name;
  // const inputPassword = initialValue.password;

  // console.log(inputName);

  const handleSubmit = (e) => {
    e.preventDefault();

    let saved = localStorage.getItem("Data");
    let userList = JSON.parse(saved) || [];
    let result = userList.filter((iteam) => iteam.email === data.email);

    if (result.length > 0) {
      // window.location.href = "/usertable";
      if (result[0].password === data.password) {
        window.location.href = "/usertable";
      } else {
        alert("Password entered is incorrect");
      }
    } else {
      alert("Sign up first");
    }
  };

  return (
    <StyledLogin>
      <Container>
        <Row>
          <Col md={6}>
            <motion.div
              className="form"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                  name="email"
                  type="email"
                  className="user"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
                <StyledInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
                <div>
                  <StyledButton type="submit" id="submit" className="loginbtn">
                    LOGIN
                  </StyledButton>
                </div>
              </StyledForm>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </StyledLogin>
  );
}

// Styled Components
const StyledLogin = styled.div`
  min-height: 90vh;
  display: flex;
  background-size: cover;
  align-items: center;
  background-image: url(${LoginBg});

  .form h4,
  p {
    text-align: left;
    color: #ffffff;
  }
  .label {
    font-size: 12px;
  }
`;

const StyledForm = styled.form`
  background-image: url(${FormBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 70px 0 60px 0px;
`;
const StyledInput = styled.input`
  width: 60%;
  padding: 5px 20px;
  margin: 20px 0 30px 0;
  box-sizing: border-box;
  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid #ccc;
  color: aliceblue;
`;

const StyledButton = styled.button`
  padding: 12px 30px;
  font-size: 18px;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  line-height: 1;
  box-shadow: 6px 0px 0px #00e6f6;
  outline: transparent;
  position: relative;

  &::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "LOGIN";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  &:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;

export default LoginForm;
