import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Container, Row, Col, Button, Modal } from "react-bootstrap";
import EditUser from "./Edituser";

function UserTable() {
  const [saved, setSaved] = useState([]);

  const [edit, setEdit] = useState();

  const [del, setDel] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (e, i) => {
    setShow(true);
    e.index = i;
    setEdit(e);
    // console.log("eeeeeeee", e);
  };

  // console.log("edit====>", edit);

  useEffect(() => {
    const LsValue = localStorage.getItem("Data");
    const initialValue = JSON.parse(LsValue);
    setSaved(initialValue);
  }, [del]);

  const deleteItem = (event) => {
    saved.splice(event, 1);
    localStorage.setItem("Data", JSON.stringify(saved));
    setDel(!del);
  };

  const update = () => {
    let updatedData = edit;
    let indexValue = edit.index;

    saved.splice(indexValue, 1, updatedData);

    localStorage.setItem("Data", JSON.stringify(saved));
    setShow(false);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <StyledMiddle>
              <h2> Welcome to the Dynamic Bootstrap User Table</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>
                <StyledTbody>
                  {saved.map((data, index) => (
                    <tr key={data.name}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <StyledTd>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteItem(index);
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="warning"
                          onClick={() => {
                            handleShow(data, index);
                          }}
                        >
                          Edit
                        </Button>
                      </StyledTd>
                    </tr>
                  ))}
                </StyledTbody>
              </Table>
            </StyledMiddle>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditUser edit={edit} setEdit={setEdit} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={update}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}
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
const StyledTbody = styled.tbody`
  vertical-align: middle !important;
  .btn {
    margin: 0 10px;
  }
`;
const StyledTd = styled.td`
  width: 200px;
`;
export default UserTable;
