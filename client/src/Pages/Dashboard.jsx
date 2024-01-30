import { Link } from "react-router-dom";
import { UsersTable } from "../Components/UsersTable";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3001/getEmployees");
    const data = await res.json();
    setEmployees(data.recordset);
    console.log(data)
  };

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Link to={"/addUser"} className="btn btn-primary mb-3">
        Agregar +
      </Link>
      <UsersTable employees={employees}></UsersTable>
    </>
  );
};
