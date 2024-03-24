import React, { Component } from "react";
import { Row,Col, Nav } from "react-bootstrap";

    export default class Home extends Component {
    render() {
        return (
        <>
            <header>
                <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Register</Nav.Link>
                    </Nav.Item>
                </Nav>

            </header>
            <main>
                <Row className="h-100">
                    <Col sm={2}>
                        <aside>Aside</aside>
                    </Col>
                    <Col sm={10}>
                        <section>Home  Section</section>
                    </Col>
                </Row>
            </main>
            <footer>Footer</footer>
        </>
        );
    }
}
