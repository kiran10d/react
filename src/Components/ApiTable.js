import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Container, Row, Col } from "react-bootstrap";

const ApiTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userApi, setUserApi] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const postData = await response.json();
      setUserApi(postData);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (userApi.length !== 0) {
      setIsLoading(false);
    }
    console.log(userApi);
  }, [userApi]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledMiddle>
              <h2> Welcome to the Dynamic Bootstrap API Table</h2>
              {isLoading ? (
                <h3>Loading...</h3>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>CITY</th>
                    </tr>
                  </thead>

                  <tbody>
                    {userApi.map((iteam) => (
                      <tr key={iteam.id}>
                        <td>{iteam.id}</td>
                        <td>{iteam.name}</td>
                        <td>{iteam.email}</td>
                        <td>{iteam.phone}</td>
                        <td>{iteam.address.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
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
  padding-bottom: 2rem;

  h2 {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
`;
export default ApiTable;
