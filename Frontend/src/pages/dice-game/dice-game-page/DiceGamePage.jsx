import { DICE_NUMBERS } from "../../../constants/constants";
import TertiaryButton from "../../../components/common/TertiaryButton";
import { useState } from "react";
import SecondaryButton from "../../../components/common/SecondaryButton";

const DiceGamePage = () => {
  const [selectedNum, setSelectedNum] = useState(-1);
  const [showWarning, setShowWarning] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [dice, setDice] = useState("/Dice_1.png");

  const handleSelectedNum = (e) => {
    const numSelected = Number(e.target.textContent);
    if (numSelected !== selectedNum) {
      setSelectedNum(numSelected);
    } else {
      setSelectedNum(-1);
    }
    setShowWarning(false);
  };

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  const handleRollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    
    if (selectedNum !== -1) {
      setDice(`/Dice_${num}.png`);
      if (num === selectedNum) {
        setTotalScore((prev) => prev + num);
      } else {
        setTotalScore((prev) => prev - 2);
      }
    }
    else{
      setShowWarning(true);
    }
  };

  const handleReset = () => {
    setSelectedNum(-1);
    setShowWarning(false);
    setTotalScore(0);
  }

  return (
    <div>
      <div className="flex justify-center py-3">
        <div style={{ minWidth: "1280px", maxWidth: "1280px" }}>
          <p
            style={{
              // border: "1px solid black",
              color: "#FF0C0C",
              display: "flex",
              justifyContent: "end",
              marginBottom: "8px",
              visibility: showWarning ? "visible" : "hidden",
            }}
          >
            You have not selected any number
          </p>
          <div
            style={{
              // border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "135px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="text-5xl">{totalScore}</h1>
              <h2 className="text-xl">Total Score</h2>
            </div>

            <div>
              <ul className="flex  gap-4">
                {DICE_NUMBERS.map((item) => {
                  return (
                    <TertiaryButton
                      key={item?.id}
                      text={item?.num}
                      maxWidth="64px"
                      minWidth="64px"
                      height="64px"
                      fontSize="20px"
                      backgroundColor={
                        item?.num === selectedNum ? "black" : "white"
                      }
                      fontColor={item?.num === selectedNum ? "white" : "black"}
                      onClick={handleSelectedNum}
                    />
                  );
                })}
                {/* {console.log(DICE_NUMBERS)} */}
              </ul>
              <h2 className="font-semibold text-right mt-1.5">Select Number</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 py-3">
        <button type="button" onClick={handleRollDice}>
          <img src={dice} alt="Dice Image" />
        </button>
        <p className="text-2xl">Click on Dice to roll</p>

        <TertiaryButton
          maxWidth="220px"
          minWidth="220px"
          borderRadius="5px"
          text="Reset Score"
          onClick={handleReset}
        />
        <SecondaryButton text="Show Rules" onClick={handleShowRules} />

        {showRules && (
          <div className="bg-[#FBF1F1] w-175 p-5">
            <h2 className="text-2xl font-bold mb-4">How to play dice game</h2>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiceGamePage;
