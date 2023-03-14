import { Form } from "react-bootstrap";

const TaskForm = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </>
  );
};

export default TaskForm;
