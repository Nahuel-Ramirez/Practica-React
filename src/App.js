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
  return (
    <>
      <Container>
        <Row justify={"center"} mt={5}>
          <Col size={4}>
            <TaskForm addTask={addTask} />
          </Col>
          <Col size={6}>
            <Tasks tasks={tasks} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
