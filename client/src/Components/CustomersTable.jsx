export const CustomersTable = ({ customers }) => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre de la Compañía</th>
            <th scope="col">Nombre del Contacto</th>
            <th scope="col">Titulo del Contacto</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Pais</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.CustomerID}>
                <th scope="row">{customer.CustomerID}</th>
                <td>{customer.CompanyName}</td>
                <td>{customer.ContactName}</td>
                <td>{customer.ContactTitle}</td>
                <td>{customer.City}</td>
                <td>{customer.Country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  