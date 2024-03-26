import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

export default function Layouts() {
    return (
            <>
                <Header />
                <main>
                    <Row className="h-100">
                        <Col sm={2}>
                            <Aside />
                        </Col>
                        <Col sm={10}>
                            <Outlet />
                        </Col>
                    </Row>
                </main>
                <Footer />

            </>
    )
}
