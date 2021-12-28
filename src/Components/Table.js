import React from "react";
import styled from "styled-components";
import { Table, Container, Row, Col } from "react-bootstrap";

const App = () => {
  const students = [
    { id: 1, name: "Kiran" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Ajith" },
    { id: 4, name: "Pavithran" },
  ];
  console.log(students);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledMiddle>
              <h2> Welcome to the Dynamic Bootstrap Table</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(({ id, name }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
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
};
// Styled Components
const StyledMiddle = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    padding-bottom: 2rem;
  }
`;
export default App;
