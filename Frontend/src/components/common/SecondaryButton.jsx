import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SecondaryButton = ({
  px = "16px",
  py = "10px",
  text = "Your Text",
  minWidth = "220px",
  maxWidth = "220px",
  imgSrc = "",
  altText = "icon",
  type = "button",
  onClick = () => {}
}) => {
  return (
    <Button
      variant="contained"
      type={type}
      sx={{
        textTransform: "none",
        backgroundColor: "#000000",
        display: "flex",
        minWidth,
        maxWidth,
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        // padding: "20px 0",
        padding: `${py} ${px}`
      }}
      onClick={onClick}
    >
      {imgSrc !== "" ? <img src={imgSrc} alt={altText} /> : <></>}
      <Typography variant="body1" component="span">
        {text}
      </Typography>
    </Button>
  );
};

export default SecondaryButton;
