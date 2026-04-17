import SearchBar from "../../components/common/SearchBar";

const FirebaseContactApp = () => {
  return (
    <div className="w-screen h-screen bg-yellow-500 flex justify-center items-center">
      <div className="w-93.75 bg-gray-900 p-[7.5px] h-[680px] flex flex-col box-border gap-[16px]">

        <div className="bg-[#FFFFFF] flex rounded-[10px] justify-center items-center gap-[7px] py-[8px] px-[16px] text-[20px] font-bold">
          <img src="/FIREBASE_LOGO.png" alt="logo" />
          <h1>Firebase Contact App</h1>
        </div>

        <div className="flex gap-4">
          <SearchBar icon="/SEARCH_ICON.png" placeholder="Search Contact" />
          <button type="button" className="bg-white h-13 w-13 box-border text-[30px] rounded-full cursor-pointer hover:bg-yellow-50">+</button>
        </div>

        <div className="flex-1 flex justify-center items-center text-white text-2xl gap-4">
          <img src="/NO_CONTACT_IMAGE.png" alt="No Contact"/>
          <p>No Contact Found</p>
        </div>

      </div>
    </div>
  );
};

export default FirebaseContactApp;
