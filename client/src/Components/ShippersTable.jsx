export const ShippersTable = ({ shippers }) => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre de la Compañía</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {shippers.map((shipper) => {
            return (
              <tr key={shipper.ShipperID}>
                <th scope="row">{shipper.ShipperID}</th>
                <td>{shipper.CompanyName}</td>
                <td>{shipper.Phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  