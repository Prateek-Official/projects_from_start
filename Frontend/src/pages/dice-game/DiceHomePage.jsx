import SecondaryButton from "../../components/common/SecondaryButton";
import { useNavigate } from "react-router-dom";

const DiceHomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("User will play now");
    navigate("/dice-home/dice-game");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="w-297.5 flex h-135">
        <img src="/DICES_IMAGE.png" alt="Dice Homepage Image" />

        <div className="w-full flex flex-col justify-center items-end">
          <h1 className="font-bold text-[84px]">DICE GAME</h1>
          <SecondaryButton text="Play Now" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default DiceHomePage;
