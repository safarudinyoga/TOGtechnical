import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import './App.css'

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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
