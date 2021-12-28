import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Container, Row, Col } from "react-bootstrap";
import { getApiData } from "../Redux/Actions/ActionApi";
import styled from "styled-components";

const StyledMiddle = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;

  h2 {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
`;

export default function ReduxApiTableFc() {
  const users = useSelector((state) => state.reducerApi.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  console.log("----users----", users);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledMiddle>
              <h2>
                Welcome to the Dynamic Bootstrap Redux API Table Functional
                Component
              </h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>CITY</th>
                    <th>STREET</th>
                    <th>SUITE</th>
                    <th>ZIPECODE</th>
                    <th>COMPANY</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((iteam) => (
                    <tr key={iteam.id}>
                      <td>{iteam.id}</td>
                      <td>{iteam.address.city}</td>
                      <td>{iteam.address.street}</td>
                      <td>{iteam.address.suite}</td>
                      <td>{iteam.address.zipcode}</td>
                      <td>{iteam.company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </StyledMiddle>
          </Col>
        </Row>
      </Container>
    </>
  );
}
