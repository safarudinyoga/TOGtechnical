import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Datatables from "./components/datatables";
import './App.css'

import { data, dataSet } from './utils'

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={1} md={1} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={11} md={11} id="page-content-wrapper">
            <Header />
            <div className="content-section">
              <Breadcrumb>
                <Breadcrumb.Item>Master Data Management</Breadcrumb.Item>
                <Breadcrumb.Item active>Fee Type</Breadcrumb.Item>
              </Breadcrumb>
              <h2 className="title">Fee Type</h2>
              <Datatables data={data}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
