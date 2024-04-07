import UpdateButton from "../updateButton/UpdateButton";
import "./output.css";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Output = ({ data, handleDeleteButton, handleEdit }) => {
  return (
    <section className="outputSection">
      {data.map((item, index) => {
        return (
          <div className="outputOfItem" key={index}>
            <p className="note">
              <span className="todo">Todo: </span>
              {item}
            </p>
            <div className="buttonGroup">
              <p>
                <span className="editButton" onClick={() => handleEdit(item)}>
                  <GrEdit />
                </span>
              </p>
              <UpdateButton data={data} index={index} />
              <p>
                <span
                  className="deleteButton"
                  onClick={() => handleDeleteButton(index)}
                >
                  <MdDelete />
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Output;
