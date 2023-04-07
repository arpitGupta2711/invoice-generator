import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import Invoice from "./Invoice/Invoice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Invoices = () => {
  const { invoices } = useSelector((state) => state.invoices);
console.log(invoices);
  return (
    <ListGroup style={{ width: "80%", listStyle: "none" }}>
      {invoices.map((item) => {
        return (
          <Invoice
            openModal={item.openModal}
            closeModal={item.closeModal}
            id={item.id}
            info={item.info}
          />
        );
      })}

      <Link to="/form" style={{ justifyContent: "center", display: "flex" }}>
        <Button style={{ marginTop: "30px", width: "30%" }}>
          Add New Invoice
        </Button>
      </Link>
    </ListGroup>
  );
};

export default Invoices;
