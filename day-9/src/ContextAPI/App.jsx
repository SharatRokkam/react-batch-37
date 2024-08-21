// App.jsx(data) =>>> TaskList ==> TaskItem ==> TaskDetails(data)
//Props Drilling

import { useState, createContext } from "react";
import TaskList from "./TaskList";
import "../App.css";

//Store
export const MyContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ]);

  return (
    <>
      <MyContext.Provider value={tasks}>
        <TaskList />
      </MyContext.Provider>
    </>
  );
};

export default App;
