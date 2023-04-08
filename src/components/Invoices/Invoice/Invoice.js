import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";

import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteAInvoice } from "../../../actions/invoiceActions.js";

import { Link } from "react-router-dom";

import InvoiceModal from "../../InvoiceModal.js";
import { Row, Col } from "react-bootstrap";
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
    <ListGroup.Item as="li" style={{ margin: "5px 0px", padding: "10px 0" }}>
      <Row>
        <Col>
          <div style={{ marginLeft: "25%" }}>
            <div className="fw-bold">Invoice No:</div>
            {info.invoiceNumber}
          </div>
        </Col>

        <Col>
          <div style={{ marginLeft: "25%" }}>
            <div className="fw-bold">From</div>
            {info.billFrom}
          </div>
        </Col>

        <Col>
          <div style={{ marginLeft: "25%" }}>
            <div className="fw-bold">To</div>
            {info.billTo}
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "25%" }}>
            <div className="fw-bold">Date of Issue:</div>
            {info.dateOfIssue}
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "50%" }}>
            <div className="fw-bold">Total</div>
            {info.total} {info.currency}
          </div>
        </Col>

        {isOpen && (
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
        )}
      </Row>

      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <div style={{ marginLeft: "10%", marginRight: "10%" ,fontSize:'30px'}}>
          <GrFormView
            onClick={openModal}
            title="View"
            style={{ cursor: "pointer", marginTop: "7px", fontSize: "30px" }}
          />
        </div>

        <Link
          to={`/form/${id}`}
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <AiOutlineEdit
            title="Edit"
            style={{
              cursor: "pointer",
              marginTop: "7px",
              fontSize: "30px",
              color: "black",
            }}
          />
        </Link>
        <Link
          to={`/form/copy/${id}`}
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <AiOutlineCopy
            title="Copy"
            style={{
              cursor: "pointer",
              marginTop: "7px",
              fontSize: "30px",
              color: "black",
            }}
          />
        </Link>
        <div style={{ marginLeft: "10%", marginRight: "10%" ,fontSize:'30px'}}>
          <BsTrash
            onClick={handleDelete}
            style={{
              cursor: "pointer",
              marginTop: "7px",
              fontSize: "30px",
            }}
            title="Delete"
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default Invoice;
