import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <label className="bg-gray-200 p-1 flex items-center space-x-1 rounded-3xl">
      <MdSearch size="1.5em" color="#7f7f7f" />
      <input
        className="bg-gray-200 placeholder-gray-500"
        placeholder="search"
      ></input>
    </label>
  );
};

export default Search;
