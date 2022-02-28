import { MdHome, MdEmail } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";

const BottomNavMobile = () => {
  return (
    <nav className="bg-primary fixed bottom-0 w-screen py-3 px-10 flex items-center justify-around md:invisible">
      <MdHome color="white" size="2rem" />
      <MdEmail color="white" size="2rem" />
      <BsBellFill color="white" size="1.8rem" />
    </nav>
  );
};

export default BottomNavMobile;
