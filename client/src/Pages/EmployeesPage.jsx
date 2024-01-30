import { Link } from "react-router-dom";
import { UsersTable } from "../Components/UsersTable";
import { useEffect, useState } from "react";

export const EmployeesPage = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3001/getEmployees");
    const data = await res.json();
    setEmployees(data.recordset);
  };

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Link to={"/addemployee"} className="btn btn-primary mb-3">
        Agregar +
      </Link>
      <UsersTable employees={employees}></UsersTable>
    </>
  );
};
