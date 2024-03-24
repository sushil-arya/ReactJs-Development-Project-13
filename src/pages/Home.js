import React, { Component } from "react";
import { Row,Col } from "react-bootstrap";

    export default class Home extends Component {
    render() {
        return (
        <>
            <header>Header</header>
            <main>
                <Row className="h-100">
                    <Col sm={2}>
                        <aside>Aside</aside>
                    </Col>
                    <Col sm={10}>
                        <section>Section</section>
                    </Col>
                </Row>
            </main>
            <footer>Footer</footer>
        </>
        );
    }
}
