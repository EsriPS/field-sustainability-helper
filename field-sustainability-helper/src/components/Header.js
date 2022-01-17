function Header({ color, backgroundColor, title }) {
  return (
    <h2 slot="header" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
      {title}
    </h2>
  );
}

export default Header;
