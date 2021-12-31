import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import LoginBg from "../../Assets/login-bg.png";
import FormBg from "../../Assets/login-form.png";
import { bounceRight } from "../../Animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  // console.log("dataaaaa", data);

  const animate = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    }
  }, [animate, inView]);

  const handle = (e) => {
    e.preventDefault();

    let userList = localStorage.getItem("Data");

    // console.log("dataaaaa", data);

    if (userList == null) {
      localStorage.setItem("Data", JSON.stringify([data]));
      window.location.href = "/";
    } else {
      let userDet = JSON.parse(userList);

      userDet.push(data);
      localStorage.setItem("Data", JSON.stringify(userDet));
      window.location.href = "/";

      // console.log("iddddddddddd", userDet);
    }
  };

  return (
    <StyledLogin>
      <Container>
        <Row>
          <Col md={6}>
            <motion.div
              ref={ref}
              className="form"
              variants={bounceRight}
              initial="hidden"
              animate={animate}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <StyledForm>
                <StyledInput
                  name="name"
                  type="text"
                  className="user"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
                <StyledInput
                  name="email"
                  type="email"
                  className="email"
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
                  <StyledButton
                    type="submit"
                    id="submit"
                    className="loginbtn"
                    onClick={handle}
                  >
                    SIGNUP
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
  padding: 50px 0 40px 0px;
`;
const StyledInput = styled.input`
  width: 60%;
  padding: 5px 20px;
  margin: 20px 0 18px 0;
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
    content: "SIGNUP";
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
export default Signup;
