/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input style={{marginRight: '20px', marginBottom: '10px', borderRadius: '5px', width: '90%'}}
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