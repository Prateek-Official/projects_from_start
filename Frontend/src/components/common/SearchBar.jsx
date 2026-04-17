const SearchBar = ({
  placeholder = "Your placeholder",
  borderColor = "white",
  outline = "none",
  icon = "",
  textColor = "white",
  bgColor = "",
  borderRadius = "10px",
  iconWidth = "18px",
  iconHeight = "18px",
}) => {
  return (
    <div
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        display: "flex",
        borderRadius,
        gap: "10px",
        padding: "5px 10px",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon !== "" ? (
        <img src={icon} style={{ height: iconHeight, width: iconWidth }} />
      ) : (
        <></>
      )}
      <input
        placeholder={placeholder}
        style={{ color: textColor, flex: 1, border: "1px solid transparent" }}
        onFocus={(e) => {
          e.target.style.outline = outline;
          e.target.style.border = "1px solid transparent";
        }}
      />
    </div>
  );
};

export default SearchBar;
