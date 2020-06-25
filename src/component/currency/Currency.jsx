import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import data from "../../data/currency.json";
import "./Currency.css";

class Currency extends React.Component {
  state = {
    from: "USD",
    to: "USD",
    amount: 0,
    result: null
  };
  fromUpdate = (event) => {
    this.state.from = event.target.value;
  };
  toUpdate = (event) => {
    this.state.to = event.target.value;
  };
  amountUpdate = (ev) => {
    this.state.amount = ev.target.value;
  };
  convert = () => {
    let finalAns =
      Math.round(data["rates"][this.state.to] / data["rates"][this.state.from]) *
      this.state.amount;
    this.setState({
      result: finalAns
    });
  };
  render() {
    return (
      <div className="form">
        <Container >
          <Form className="inside">
            <Form.Label><strong><i>From Currency</i></strong></Form.Label>

            <Form.Control as="select" onChange={this.fromUpdate}>
              {Object.entries(data["rates"]).map((item) => (
                <option>{item[0]}</option>
              ))}
            </Form.Control>

            <Form.Label><strong><i>To Currency</i></strong></Form.Label>
            <Form.Control as="select" onChange={this.toUpdate}>
              {Object.entries(data["rates"]).map((item) => (
                <option>{item[0]}</option>
              ))}
            </Form.Control>
            <Form.Label> </Form.Label>
            <Form.Label><strong><i>Enter Amount</i></strong></Form.Label>
            <Form.Control
              placeholder="Enter Amount"
              onChange={this.amountUpdate}
            />
            <br />
            <Button onClick={this.convert}>Convert</Button>
            <br />
            <Form.Label> </Form.Label>
            <Form.Control placeholder="Converted Currency" value = {this.state.result} ></Form.Control>
          
          </Form>
          
        </Container>
      </div>
    );
  }
}

export default Currency;
