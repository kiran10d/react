import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function Axios() {
  const [post, setPost] = useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  console.log(post);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledMiddle>
              <h2> Welcome to the Dynamic Bootstrap Axios API Table</h2>
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
                  {post.map((iteam) => (
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
            </StyledMiddle>
          </Col>
        </Row>
      </Container>
    </>
  );
}

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
export default Axios;
