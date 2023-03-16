// import React, { useState } from "react";
// import './SecondTask.css';

// function SecondTask() {
//   const [text, setText] = useState("");
//   const maxCharacters = 100;

//   const handleChange = (event) => {
//     const { value } = event.target;
//     if (value.length <= maxCharacters) {
//       setText(value);
//     }
//   };

//   return (
//     <div className="app-container">
//       <textarea
//         className="text-area"
//         placeholder={`Type something (maximum ${maxCharacters} characters)`}
//         value={text}
//         onChange={handleChange}
//       />
//       <div className="counter">{`${text.length}/${maxCharacters}`}</div>
//     </div>
//   );
// }

// export default SecondTask;
