import React from "react";

import { Form } from "react-bootstrap";

const EditUser = (props) => {
  // console.log(props.edit.name);
  console.log("setEdit", props.edit);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Name"
            value={props.edit.name}
            onChange={(e) =>
              props.setEdit({ ...props.edit, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={props.edit.email}
            onChange={(e) =>
              props.setEdit({ ...props.edit, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="text"
            placeholder="Password"
            value={props.edit.password}
            onChange={(e) =>
              props.setEdit({ ...props.edit, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditUser;
