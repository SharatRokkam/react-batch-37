//child == app.jsx
// import Function from "./Components/Function";
// import ClassComp from "./Components/ClassComp";
import "./App.css";
//Named Import
import Footer, { Main, Header } from "./Components/MyComponent";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
