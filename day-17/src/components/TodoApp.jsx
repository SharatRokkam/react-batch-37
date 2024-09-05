// import { useState } from "react";
// import "../App.css";

// const TodoApp = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTasks([...tasks, task]);
//     setTask("");
//     console.log(task);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Todo List</h2>
//         <input
//           type="text"
//           placeholder="enter your todo"
//           onChange={handleChange}
//           value={task}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default TodoApp;
