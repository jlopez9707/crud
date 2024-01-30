import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomersTable } from "../Components/CustomersTable";

export const CustomersPage = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3001/getCustomers");
    const data = await res.json();
    setCustomers(data.recordset);
  };

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Link to={"/addCustomers"} className="btn btn-primary mb-3">
        Agregar +
      </Link>
      <CustomersTable customers={customers}></CustomersTable>
    </>
  );
};
