import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Container, Row, Col } from "react-bootstrap";
import { getApiData } from "../Redux/Actions/ActionApi";

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

class ReduxApiTable extends Component {
  componentDidMount(props) {
    this.props.dispatch(getApiData());
    // console.log("-----props------", this.props.users);
  }
  render() {
    console.log("----UI----");
    console.log("-----propsrender------", this.props.users);
    return (
      <>
        <Container>
          <Row>
            <Col>
              <StyledMiddle>
                <h2>
                  Welcome to the Dynamic Bootstrap Redux API Table Class
                  Component
                </h2>
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
                    {this.props &&
                      this.props.users.length > 0 &&
                      this.props.users.map((iteam) => (
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
}

const mapStateToProps = (state) => {
  // console.log(state.reducerApi);
  return {
    users: state.reducerApi.users,
  };
};

export default connect(mapStateToProps)(ReduxApiTable);
