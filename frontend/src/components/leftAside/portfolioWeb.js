import { CounterComponent } from "..";

const PortfolioWeb = () => {
  return (
    <div className=" rounded-md text-sm flex absolute top-30 bg-gray-600 w-32 h-52">
      <CounterComponent title="Followers" count="200" />
      <CounterComponent title="Following" count="500" />
    </div>
  );
};

export default PortfolioWeb;
