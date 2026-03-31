import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SecondaryButton = ({
  text = "Your Text",
  minWidth = "220px",
  maxWidth = "220px",
  imgSrc = "",
  altText = "icon",
  type = "button",
}) => {
  return (
    <Button
      variant="contained"
      type={type}
      sx={{
        backgroundColor: "#000000",
        display: "flex",
        minWidth,
        maxWidth,
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      {imgSrc !== "" ? <img src={imgSrc} alt={altText} /> : <></>}
      <Typography variant="body1" component="span">
        {text}
      </Typography>
    </Button>
  );
};

export default SecondaryButton;
