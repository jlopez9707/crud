import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Dashboard } from "./Pages/Dashboard";
import { AddUser } from "./Pages/AddUser";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Content";
import { CustomersPage } from "./Pages/CustomersPage";
import { EmployeesPage } from "./Pages/EmployeesPage";
import { ShippersPage } from "./Pages/ShippersPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/employees" element={<EmployeesPage></EmployeesPage>}></Route>
          <Route path="/addemployee" element={<AddUser></AddUser>}></Route>
          <Route path="/customers" element={<CustomersPage></CustomersPage>}></Route>
          <Route path="/shippers" element={<ShippersPage></ShippersPage>}></Route>
          <Route path="/*" element={<p>Error 404</p>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
