import { Link } from "react-router-dom";

const TertiaryButton = ({
  px = "16px",
  py = "6px",
  text = "Your Text",
  fontSize = "16px",
  // link = "/",
  maxWidth = "100%",
  minWidth = "100%",
  height="",
  fontColor = "black",
  borderRadius = "0px",
  borderColor = "black",
  fontWeight = 500,
  imgSrc = "",
  altText = "icon",
  marginTop = "0px",
  type = "button",
  backgroundColor = "white",
  onClick = () => {}
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`border cursor-pointer`}
      style={{
        color: fontColor,
        height,
        minWidth,
        maxWidth,
        borderRadius,
        fontWeight,
        marginTop,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderWidth: "2px",
        padding: `${py} ${px}`,
        backgroundColor,
        fontSize,
        borderColor,

        // color: {fontColor}
      }}
    >
      {imgSrc !== "" ? <img src={imgSrc} alt={altText} /> : <></>}
      {/* <Link to={`${link}`}>{text}</Link> */}
      <p>{text}</p>
    </button>
  );
};

export default TertiaryButton;

// text-[#5A5959]
// border-[#5A5959]
