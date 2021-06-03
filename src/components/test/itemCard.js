import React from "react";
import { Card } from "react-bootstrap";
export const ItemCard = (props) => {
  return (
    <div>
      <Card style={{ width: "200px", margin: "10px" }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>
            Screwdriver Sets
          </Card.Title>
          <Card.Text>From ₹ 46</Card.Text>
          <Card.Text>Best Selling</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
