import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { createVital, updateVitals } from "./your-graphql-queries"; 

const AddUpdateVital = ({ show, onHide, initialValues, isEditing }) => {
  const [form, setForm] = useState(initialValues);

  const [createVitalMutation] = useMutation(createVital, {
    onError: (error) => {
      console.error("Error creating vital:", error);
    },
  });

  const [updateVitalsMutation] = useMutation(updateVitals, {
    onError: (error) => {
      console.error("Error updating vital:", error);
    },
  });

  useEffect(() => {
    setForm(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isEditing) {
        await updateVitalsMutation({
          variables: {
            id: form.id,
            // Other fields you want to update
          },
        });
        onHide();
      } else {
        await createVitalMutation({
          variables: {
            // Pass the fields you want to create here
          },
        });
        onHide();
      }
    } catch (error) {
      console.error("Error submitting vital:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditing ? "Edit Vital" : "Add Vital"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="datetime">
            <Form.Label>Date and Time</Form.Label>
            <Form.Control
              type="text"
              name="datetime"
              value={form.datetime}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="temp">
            <Form.Label>Temperature</Form.Label>
            <Form.Control
              type="text"
              name="temp"
              value={form.temp}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add similar form controls for other vital signs */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {isEditing ? "Save Changes" : "Add Vital"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUpdateVital;
