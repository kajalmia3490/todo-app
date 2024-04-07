import React from "react";
import './input.css';
import Output from "../output/Output";

const Input = ({
  handleChange,
  handleSubmit,
  todo,
  data,
  setData,
  handleDeleteButton,
  handleEdit,
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your todo"
          required
          value={todo}
          onChange={handleChange}
        />
        <button className="addButton" type="submit">
          Add Item
        </button>
      </form>
      <Output
        data={data}
        setData={setData}
        handleDeleteButton={handleDeleteButton}
        handleEdit={handleEdit}
      />
    </section>
  );
};

export default Input;
