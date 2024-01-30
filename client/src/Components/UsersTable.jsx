export const UsersTable = ({ employees }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Titulo</th>
          <th scope="col">Fecha de nacimiento</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Pais</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={employee.EmployeeID}>
              <th scope="row">{employee.EmployeeID}</th>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.Title}</td>
              <td>{employee.BirthDate.slice(8, 10)}{employee.BirthDate.slice(4, 7)}-{employee.BirthDate.slice(0, 4)}</td>
              <td>{employee.City}</td>
              <td>{employee.Country}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
