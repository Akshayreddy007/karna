import React, { Component, useEffect, useState } from 'react'
import { Form, Modal, Button, Table, Tabs, Tab } from 'react-bootstrap'
import Router from "next/router";


export default function TimeoutModal(props) {
const direction=()=>{
    Router.push("/");
}
    
    return (
        <Modal size="md" show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>You have been logged out due to inactivity!</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>

            </Modal.Body> */}
            <Modal.Footer>
                <Button variant="secondary" onClick={direction}>
                    Ok
                </Button>
                {/* <Button variant="secondary" onClick={props.modalClose}>
                    Keep me signed In
                </Button> */}

            </Modal.Footer>
        </Modal>
    )

}

