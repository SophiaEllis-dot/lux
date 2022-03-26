import { MdPerson } from "react-icons/md";

const ProfilePic = ({ border_bg }) => {
  return (
    <div
      className={`bg-gray-500 rounded-full p-2 border-4 border-${
        border_bg || "white-500"
      }`}
    >
      <MdPerson size="3em" color="white" />
    </div>
  );
};

export default ProfilePic;
