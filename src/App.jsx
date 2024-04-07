import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/container/input/Input";

function App() {
  // state management
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  // change button
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, todo];
    });
    setTodo("");
  };

  // delete button
  const handleDeleteButton = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // edit button
  const handleEdit = (item) => {
    setTodo((prev) => {
      return [...prev, setTodo(item)];
    });
  };

  return (
    <div className="app">
      <Header />
      <Input
        data={data}
        setData={setData}
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDeleteButton={handleDeleteButton}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
