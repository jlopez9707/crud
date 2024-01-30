export const UserFormCreate = () => {
  return (
    <form className="w-sm-50 mx-auto border border-2 rounded border-secondary-subtle p-4">
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Nombre
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
        />
        <div id="nameHelp" className="form-text">
          Descripcion del nombre
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
        />
        <div id="emailHelp" className="form-text">
          El correo debe ser unico.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword"
        />
        <div id="passwordHelp" className="form-text">
          La contraseña debe tener mayusculas y minusculas.
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Worker?
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
          />
          <label className="form-check-label" htmlFor="exampleCheck2">
            Admin?
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};
