import React from "react";
import Table from "./Table";

const Pagination = ({ data }) => {
  const [option, setOption] = React.useState(5);
  const [btn, setBtn] = React.useState([
    ...Array(Math.ceil(data.length / 5)).keys(),
  ]);
  const [dataShow, setDataShow] = React.useState(data.slice(0, option));
  return (
    <>
      <div className="card flex justify-content-center align-items-center px-50 py-40 my-20 input-div">
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            data-testid="selectInput"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
              setDataShow(data.slice(0, e.target.value));
              setBtn([
                ...Array(Math.ceil(data.length / e.target.value)).keys(),
              ]);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </form>

        <div className="button-div" data-testid="buttonDiv">
          {btn?.map((item, index) => (
            <button
              key={index}
              data-testid="button"
              onClick={() => {
                setDataShow(data.slice(option * index, option * (index + 1)));
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <Table data={dataShow} />
    </>
  );
};

export default Pagination;
