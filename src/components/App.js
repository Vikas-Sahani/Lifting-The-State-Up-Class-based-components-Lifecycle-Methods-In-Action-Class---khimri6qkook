import React, { Fragment, useState } from "react";
import "./../styles/App.css";

let GlobalId = 1;
function App() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  return (
    <div id="main">
      <form>
        <input
          type="text"
          id="task"
          onChange={function (e) {
            setInputVal(e.target.value);
          }}
          value={inputVal}
        />{" "}
        &nbsp;
        <button
          type="submit"
          id="btn"
          onClick={function (event) {
            event.preventDefault();
            if (inputVal.length > 0) {
              let copyOfData = data.slice();
              let taskObj = {
                task: inputVal,
                id: GlobalId++,
                complete: false,
              };
              copyOfData.push(taskObj);
              setData(copyOfData);

              setInputVal("");
            }
          }}
        >
          Add
        </button>
      </form>

      <ol>
        {data.map((obj) => {
          let task = obj.task;
          let id = obj.id;
          let complete = obj.complete;

          return (
            <Fragment key={id}>
              {!complete ? (
                <div>
                  <li className="list">{task}</li>
                  <button
                    className="edit"
                    onClick={function () {
                      let copyOfData = data.slice();
                      for (let object of copyOfData) {
                        if (object.id === id) {
                          object.complete = !complete;
                        }
                      }
                      setData(copyOfData);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={function () {
                      let newArr = data.filter(function (obj) {
                        return id !== obj.id;
                      });
                      setData(newArr);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <li>
                  <input
                    type="text"
                    className="editTask"
                    onChange={function (e) {
                      if (e.target.value.length > 0) {
                        let copyOfData = data.slice();
                        for (let object of copyOfData) {
                          if (object.id === id) {
                            object.task = e.target.value;
                          }
                        }
                        setData(copyOfData);
                      } else {
                        return;
                      }
                    }}
                  />
                  <br />
                  <button
                    className="saveTask"
                    onClick={function () {
                      let copyOfData = data.slice();
                      for (let object of copyOfData) {
                        if (object.id === id) {
                          object.complete = !complete;
                        }
                      }
                      setData(copyOfData);
                    }}
                  >
                    saveTask
                  </button>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
export default App;
