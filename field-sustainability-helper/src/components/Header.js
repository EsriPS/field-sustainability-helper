function Header({ color, backgroundColor, title }) {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        color,
        backgroundColor,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "8px", fontWeight: "bold", fontSize: "18px" }}>
        {title}
      </div>
    </div>
  );
}

export default Header;
