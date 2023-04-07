import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import Invoices from "./components/Invoices/Invoices";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />,
  },
  {
    path: "/form",
    element: (
      <Container>
        <InvoiceForm />
      </Container>
    ),
  },

  {
    path: "/form/:id",
    element: (
      <Container>
        <InvoiceForm edit={true} />
      </Container>
    ),
  },
]);

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
