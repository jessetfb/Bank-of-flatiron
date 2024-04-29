import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    onSearch(event.target.value);
  }

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input style={{marginRight: '20px', padding: '10px', borderRadius: '5px', width: '300px'}}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder=" search ..."
      />
      <button onClick={handleSearch}
      style={{padding: '10px', color: 'black', cursor: 'pointer', borderRadius: '5px'}}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;