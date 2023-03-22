import { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "./components/layout/Base";
import Tasks from "./components/Tasks/Task";
import TaskForm from "./components/TasksForm/TasksForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    //El estado es asincrono entonces hago ...tasks para q me guarde la primer tarea
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const deleteTask = (id) => {
    const finalTask = tasks.filter((task) => task.id !== id);
    setTasks(finalTask);
  };

  return (
    <>
      <Container>
        <Row justify="center">
          <h1>Tareas</h1>
        </Row>
        <Row justify="space-around" mt={5} align="center">
          <Col size={2}>
            <TaskForm addTask={addTask} />
          </Col>
          <Col size={2}>
            <Tasks tasks={tasks} deleteTask={deleteTask} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
