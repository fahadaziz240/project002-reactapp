import "./App.css";

function App(props) {
  return (
    <div>
      <h1>
        My Name is {props.name} and My age is {props.age - 5}
      </h1>
      <h1>Rafaquat {props.age}</h1>
    </div>
  );
}

export default App;
