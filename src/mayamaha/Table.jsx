import "../mayamaha/Table.css";

function Table({ tableData }) {
  return (
    <div className="wrappers">
      <div className="form-wrappers">
        <div className="view-container">
          <table className="table table table-striped">
            <thead>
              <tr className="table-dark">
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Table;
