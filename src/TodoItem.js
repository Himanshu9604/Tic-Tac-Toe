// import React, { useState } from "react";

// function TodoList() {
//   const [taskInput, setTaskInput] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [uncompletedCount, setUncompletedCount] = useState(0);

//   function handleTaskInputChange(event) {
//     setTaskInput(event.target.value);
//   }

//   function handleTaskSubmit(event) {
//     event.preventDefault();
//     if (taskInput.trim() !== "") {
//       setTasks([...tasks, { text: taskInput.trim(), completed: false }]);
//       setTaskInput("");
//       setUncompletedCount(uncompletedCount + 1);
//     }
//   }

//   function handleTaskDelete(index) {
//     const newTasks = [...tasks];
//     const taskToRemove = newTasks[index];
//     if (!taskToRemove.completed) {
//       setUncompletedCount(uncompletedCount - 1);
//     }
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//   }

//   function handleTaskComplete(index) {
//     const newTasks = [...tasks];
//     const taskToComplete = newTasks[index];
//     if (!taskToComplete.completed) {
//       setUncompletedCount(uncompletedCount - 1);
//     }
//     taskToComplete.completed = true;
//     setTasks(newTasks);
//   }

//   return (
//     <div>
//       <form onSubmit={handleTaskSubmit}>
//         <input
//           type="text"
//           value={taskInput}
//           onChange={handleTaskInputChange}
//         />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <span
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//               }}
//             >
//               {task.text}
//             </span>
//             <button onClick={() => handleTaskComplete(index)}>Complete</button>
//             <button onClick={() => handleTaskDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <p>{uncompletedCount} uncompleted task(s) remaining</p>
//     </div>
//   );
// }

// export default TodoList;
