// App.jsx(data) =>>> TaskList ==> TaskItem ==> TaskDetails(data)
//Props Drilling

import { useState } from "react";
import TaskList from "./TaskList";
import "../App.css";

// Uni direction Flow = parent -> child

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ]);

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
