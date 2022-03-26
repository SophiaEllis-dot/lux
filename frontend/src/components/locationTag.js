import { MdLocationOn } from "react-icons/md";

const LocationTag = ({ location }) => {
  return (
    <div className="flex items-center space-x-1">
      <MdLocationOn color="grey" />
      <p className=" text-gray-700">{location}</p>
    </div>
  );
};

export default LocationTag;
