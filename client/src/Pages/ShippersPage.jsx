import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShippersTable } from "../Components/ShippersTable";

export const ShippersPage = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3001/getShippers");
    const data = await res.json();
    setShippers(data.recordset);
  };

  const [shippers, setShippers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Link to={"/addshippers"} className="btn btn-primary mb-3">
        Agregar +
      </Link>
      <ShippersTable shippers={shippers}></ShippersTable>
    </>
  );
};