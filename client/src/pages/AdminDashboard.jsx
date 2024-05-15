import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaTachometerAlt, FaUser } from 'react-icons/fa';

const AdminDashboard = () => {
  const [navbarCollapsed, setNavbarCollapsed] = React.useState(true);

  const handleToggle = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <div>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expanded={!navbarCollapsed}
        className={`navbar-collapse ${navbarCollapsed ? 'collapse' : ''}`}
      >
        <Navbar.Brand>
          <FaTachometerAlt /> Admin Dashboard
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link href="#/questionset">Question Set</Nav.Link>
          <Nav.Link href="#/tabularview">Tabular View</Nav.Link>
          <Nav.Link href="#/logout">Logout</Nav.Link>
          <NavDropdown alignRight title={<FaUser size={24} />} id="nav-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Container style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
        <Row>
          <Col xs={6}>
            <h2 style={{ textAlign: 'center' }}>Evaluating Feedback</h2>
            <Row style={{ justifyContent: 'center' }}>
              <Col xs={4}>Feedback 1</Col>
              <Col xs={4}>Feedback 2</Col>
              <Col xs={4}>Feedback 3</Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Col xs={4}>Feedback 4</Col>
              <Col xs={4}>Feedback 5</Col>
              <Col xs={4}>Feedback 6</Col>
            </Row>
          </Col>
          <Col xs={6}>
            <h2 style={{ textAlign: 'center' }}>Action Taken</h2>
            <Row style={{ justifyContent: 'center' }}>
              <Col xs={4}>Action 1</Col>
              <Col xs={4}>Action 2</Col>
              <Col xs={4}>Action 3</Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <Col xs={4}>Action 4</Col>
              <Col xs={4}>Action 5</Col>
              <Col xs={4}>Action </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
