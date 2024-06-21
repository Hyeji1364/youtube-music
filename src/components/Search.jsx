import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Search = () => {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const data = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
    ];

    const handleInputChange = (event) => {
        const { value } = event.target;
        setQuery(value);
        filterData(value);
    };

    const filterData = (searchQuery) => {
        const filtered = data.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <article className="search">
            <label htmlFor="searchInput">
                <LuSearch />
            </label>
            <input
                type="text"
                placeholder="Search"
                id="searchInput"
                value={query}
                onChange={handleInputChange}
            />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </article>
    );
};

export default Search;
