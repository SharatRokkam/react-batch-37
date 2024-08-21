import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { MyContext } from "./App";

const TaskList = () => {

  const tasks = useContext(MyContext)
  //access the tasks from context


  return (
    <>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
