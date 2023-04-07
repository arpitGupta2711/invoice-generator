import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteAInvoice } from "../../../actions/invoiceActions.js";
import { Link } from "react-router-dom";
import InvoiceModal from "../../InvoiceModal.js";
const Invoice = ({ id, info, view }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!view) {
      dispatch(deleteAInvoice(id));
    }
  };

  const [isOpen, setOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  const closeModal = (event) => setOpen(false);
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      style={{ margin: "5px 0px", justifyContent: "none", alignItems: "none" }}
    >
      <div className="ms-2 " style={{ marginRight: "5%" }}>
        <div className="fw-bold">Invoice No:</div>
        {info.invoiceNumber}
      </div>
      <div className="ms-2 " style={{ marginRight: "3%" }}>
        <div className="fw-bold">From</div>
        {info.billFrom}
      </div>
      <div className="ms-2 " style={{ marginRight: "10%" }}>
        <div className="fw-bold">To</div>
        {info.billTo}
      </div>
      <div className="ms-2 " style={{ marginRight: "10%" }}>
        <div className="fw-bold">Date of Issue:</div>
        {info.dateOfIssue}
      </div>
      <div className="ms-2 me-auto">
        <div className="fw-bold">Total</div>
        {info.total} {info.currency}
      </div>

      <Button style={{ marginLeft: "1%" }} onClick={openModal}>
     
        View
      </Button>
      <InvoiceModal
        showModal={isOpen}
        closeModal={closeModal}
        info={info}
        items={info.items}
        currency={info.currency}
        subTotal={info.subTotal}
        taxAmmount={info.taxAmmount}
        discountAmmount={info.discountAmmount}
        total={info.total}
        view={true}
      />
      <Link to={`/form/${id}`}>
        <Button style={{ marginLeft: "1%", marginRight: "1%" }}>Edit</Button>
      </Link>
      <Link to={`/form/copy/${id}`}>
        <Button style={{ marginLeft: "1%", marginRight: "1%" }}>Copy</Button>
      </Link>

      <div onClick={handleDelete} style={{ cursor: "pointer" }}>
        <BsTrash style={{ marginTop: "7px", fontSize: "30px" }} />
      </div>
    </ListGroup.Item>
  );
};

export default Invoice;
