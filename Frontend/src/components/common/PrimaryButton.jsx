import { Link } from "react-router-dom";

const PrimaryButton = ({
  py = "1.5",
  px = "4",
  text = "",
  fontSize = "16px",
  link = "/",
}) => {
  return (
    <button
      className={`bg-[#D01C28] text-[#FFFFFF] px-${px} py-${py} text-[${fontSize}]`}
    >
      <Link to={`${link}`}>{text}</Link>
    </button>
  );
};

export default PrimaryButton;
