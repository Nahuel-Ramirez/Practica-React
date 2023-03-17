import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import short from "short-uuid";
import { StyledContainerTasks } from "../layout/StyledContainerTasks";
import { FormGroup } from "../layout/FormGroup";

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
    <StyledContainerTasks onSubmit={handleAddTask}>
      <FormGroup>
        <Form.Label>Nombre de la tarea</Form.Label>
        <Form.Control type="text" name="taskName" placeholder="Nombre Tarea" />
      </FormGroup>
      <FormGroup>
        <Form.Label>Descripcion de la Tarea</Form.Label>
        <Form.Control as="textarea" name="taskDescription" rows={3} />
      </FormGroup>

      <Button type="submit">Guardar tarea</Button>
    </StyledContainerTasks>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
