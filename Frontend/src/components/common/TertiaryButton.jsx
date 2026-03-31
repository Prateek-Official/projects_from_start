import { Link } from "react-router-dom";

const TertiaryButton = ({
  py = "6px",
  px = "4",
  text = "Your Text",
  fontSize = "16px",
  link = "/",
  maxWidth = "100%",
  minWidth = "100%",
  fontColor = "black",
  borderRadius = "0px",
  borderColor = "black",
  fontWeight = 500,
  imgSrc = "",
  altText = "icon",
  marginTop = "0px",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`border border-[${borderColor}] text-[${fontColor}] px-${px} py-[${py}] text-[${fontSize}] px-`}
      style={{
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
      }}
    >
      {imgSrc !== "" ? <img src={imgSrc} alt={altText} /> : <></>}
      <Link to={`${link}`}>{text}</Link>
    </button>
  );
};

export default TertiaryButton;

// text-[#5A5959]
// border-[#5A5959]
