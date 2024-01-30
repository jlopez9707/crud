const Layout = ({ children }) => {
  return (
    <>
      <div className="container p-4">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
