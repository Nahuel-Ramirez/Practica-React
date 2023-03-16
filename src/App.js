import { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "./components/layout/Base";
import Tasks from "./components/Tasks/Task";
import TaskForm from "./components/TasksForm/TasksForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const finalTask = tasks.filter((task) => task.id !== id);
    setTasks(finalTask);
  };

  return (
    <>
      <Container>
        <Row justify={"center"} mt={5}>
          <Col size={4}>
            <TaskForm addTask={addTask} />
          </Col>
          <Col size={6}>
            <Tasks tasks={tasks} deleteTask={deleteTask} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
