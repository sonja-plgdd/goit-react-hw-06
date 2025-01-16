import { useState } from "react";
import s from "./SearchBox.module.css";

function SearchBox({ filterChange }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    filterChange(e.target.value);
  };
  return (
    <div>
      <label className={s.searchbox}>
        Find contacts by name
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
}

export default SearchBox;
