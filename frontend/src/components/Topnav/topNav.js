import { Logo, Search } from "..";
import { MdOutlineMenu, MdPerson } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const TopNav = () => {
  return (
    <nav className="bg-primary w-screen py-3 px-10 fixed top-0 flex items-center justify-between">
      <Logo width={10} />
      <Search />
      <div className="md:hidden">
        <MdOutlineMenu color="white" size="2rem" />
      </div>

      <div className="hidden md:flex items-center">
        <MdPerson size={30} color="white" />

        <h3 className="text-white m-3">
          Hi
          <span> john!</span>
        </h3>
        <RiArrowDownSLine size={30} color="white" />
      </div>
    </nav>
  );
};

export default TopNav;
