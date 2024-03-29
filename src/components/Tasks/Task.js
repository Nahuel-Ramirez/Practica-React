import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { StyledContainerTasks } from "../layout/StyledContainerTasks";

const Tasks = ({ tasks, deleteTask }) => {
  const removeTask = (id) => {
    deleteTask(id);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {tasks.map((task) => {
          return (
            <StyledContainerTasks>
              <Card.Body key={task.id}>
                <Card.Title>ID: {task.id}</Card.Title>
                <Card.Subtitle className="text-muted">
                  Nombre de la tarea: {task.name}
                </Card.Subtitle>
                <Card.Text>Descripcion: {task.description}</Card.Text>
                <Button onClick={() => removeTask(task.id)}>
                  Borrar tarea
                </Button>
              </Card.Body>
            </StyledContainerTasks>
          );
        })}
      </Card>
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Tasks;
