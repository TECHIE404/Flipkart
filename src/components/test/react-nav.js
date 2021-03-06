import React, { Component } from "react";
//import { } from 'react-bootstrap/Navbar';
import { Button, Form, Navbar, InputGroup, FormControl } from "react-bootstrap";
class ReactNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar className="bg-light justify-content-between">
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default ReactNav;
