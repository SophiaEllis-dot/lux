import { CounterComponent } from "..";
import { ProfilePic, LocationTag, Hoverlink } from "..";

const PortfolioWeb = () => {
  return (
    <div className="rounded-md text-sm flex flex-col w-min top-30 bg-gray-300 space-y-10 pb-3 text-white items-center">
      <div className="bg-gray-800 h-10 w-full relative rounded-t-md">
        <div className="absolute top-3 mx-auto flex justify-center w-full">
          <ProfilePic border_bg="gray-300" />
        </div>
      </div>

      <div className=" flex flex-col space-y-2 items-center p-2">
        <h4 className="text-lg font-semibold font-nunito text-gray-800 ">
          John Doe
        </h4>

        <LocationTag location="Semarang" />

        <div className="flex space-x-2">
          <CounterComponent title="Followers" count="200" />
          <div className="border border-gray-500"></div>
          <CounterComponent title="Following" count="500" />
        </div>

        <Hoverlink text="View Profile" />
      </div>
    </div>
  );
};

export default PortfolioWeb;
