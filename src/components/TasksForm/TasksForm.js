import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import short from "short-uuid";

const TaskForm = ({ addTask }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const [taskName, taskDescription] = e.target.elements;
    addTask({
      id: short.generate().slice(18),
      name: taskName.value.trim(),
      description: taskDescription.value.trim(),
    });
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Form.Group>
        <Form.Label>Nombre de la tarea</Form.Label>
        <Form.Control type="text" name="taskName" placeholder="Nombre Tarea" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descripcion de la Tarea</Form.Label>
        <Form.Control as="textarea" name="taskDescription" rows={3} />
      </Form.Group>

      <Button type="submit">Guardar tarea</Button>
    </Form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
