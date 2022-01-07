const Lista = ({ children }) => {
  return (
    <div>
      <h1>Lista de algo</h1>
      <ul style={{
        listStyle: 'none',
        padding: '0',
    }}>{children}</ul>
    </div>
  );
};

export default Lista;
