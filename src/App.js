import { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "./components/layout/Base";
import Tasks from "./components/Tasks/Task";
import TaskForm from "./components/TasksForm/TasksForm";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Container>
        <Row justify={"center"} mt={5}>
          <Col size={6}>
            <TaskForm />
          </Col>
          <Col size={6}>
            <Tasks />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
