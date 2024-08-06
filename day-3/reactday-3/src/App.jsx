// import Cards from "./Components/Cards";
// import "./App.css";

// const App = () => {
//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       {/* First Card  */}
//       <Cards
//         title="Cat Page"
//         img="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
//         description="Cat is cute animal"
//       />

//       {/* Second cards  */}
//       <Cards
//         title="Dog Page"
//         img="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
//         description="Dog is loyal animal"
//       />

//       {/* Third Cards  */}
//       <Cards
//         title="Lion Page"
//         img="https://img.freepik.com/free-photo/view-wild-lion-nature_23-2150460851.jpg"
//         description="Lion is of king of jungle"
//       />
//     </div>
//   );
// };

// export default App;

import React from "react";
import UseState from "./Components/UseState";
import "./App.css";

const App = () => {
  return (
    <div>
      <UseState />
    </div>
  );
};

export default App;
