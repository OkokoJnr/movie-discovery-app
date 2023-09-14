import React from 'react';

function SearchBar({ setSearchQuery, searchQuery }) {
  const handleSearch = () => {
    // Use setSearchQuery to update the searchQuery state
    setSearchQuery(searchQuery);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        // Bind the input value to searchQuery
        value={searchQuery}
        // Update searchQuery state when the input changes
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
