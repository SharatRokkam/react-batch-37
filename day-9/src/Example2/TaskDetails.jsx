const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;

//The reason we add key while rendering dynamic elements so that react can understand on which element the changes are been made.
