import { MdEmail } from "react-icons/md";
import { useState } from "react";

const EmailInput = ({ errorMsg }) => {
  const [value, setValue] = useState("");
  const [errorState, setErrorState] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor="email"
        className="flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full w-full text-xl"
      >
        <MdEmail size="1.4em" color="#7F7F7F" />
        <input
          className="bg-gray-200 w-full outline-none"
          type="text"
          name="email"
          placeholder="Enter Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <p
        className={`${
          errorState ? "inline" : "hidden"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-md`}
      >
        {errorMsg}
      </p>
    </div>
  );
};

export default EmailInput;
