import React, { useEffect } from "react";

const Table = ({ data }) => {
  const [dataShow, setDataShow] = React.useState();
  useEffect(() => {
    // setDataShow([...data]);
    setDataShow(data.slice());
  }, [data]);
  return (
    <div className="card">
      <table data-testid="table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody data-testid="tableBody">
          {dataShow?.map((item) => (
            <tr key={item.id}>
              <td>{item.country}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
