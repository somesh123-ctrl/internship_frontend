import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Intrenship = ({ internship }) => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={internship.logo} />
        <Card.Body>
          <Card.Title>{internship.role}</Card.Title>
          <Card.Text>Company Name:{internship.name}</Card.Text>
          <Card.Text>Experience(yrs):{internship.experience}</Card.Text>
          <Card.Text>Stipend(Rs):{internship.stipend}</Card.Text>
          <Button variant="primary">Apply</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Intrenship;
