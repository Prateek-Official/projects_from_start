import { MENU_ITEMS } from "../../constants/constants";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/common/PrimaryButton";
import TertiaryButton from "../../components/common/TertiaryButton";

const Brand = () => {
  return (
    <div>
      <div className="flex px-8 py-4">
        <Link to="/">
          <img src="/NIKE_LOGO.png" alt="Nike Logo" />
        </Link>
        <nav className="flex-1">
          <ul className="gap-3 flex justify-center items-center h-full">
            {MENU_ITEMS.map((item) => {
              return (
                <li
                  key={item?.name}
                  className="font-semibold text-[18px] cursor-pointer"
                >
                  <Link to={`/${item?.link}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <PrimaryButton py="1.5" px="4" text="Login" />
      </div>

      <div className="flex px-12 py-4">
        <div className="flex-1 px-8">
          <h1
            className="font-extrabold text-[108px]"
            style={{ lineHeight: "104px", letterSpacing: "0%" }}
          >
            YOUR FEET DESERVE THE BEST
          </h1>

          <p className="text-[#5A5959] font-semibold w-101.25 text-[15px] mt-7">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="flex gap-10 mt-7">
            <PrimaryButton fontSize="24px" px="4" py="2" text="Shop Now" />
            <TertiaryButton fontSize="24px" px="4" py="2" text="Category" />
          </div>

          <div className="mt-7">
            <p className="text-[#5A5959]">Also Available On</p>

            <div className="flex gap-4 mt-4">
              <Link to="/">
                <img src="/flipkart.png" alt="Flipkart" />
              </Link>
              <Link to="/">
                <img src="/amazon.png" alt="Amazon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <img src="/shoe_image.png" className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
