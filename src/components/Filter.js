import { useState } from "react";

const Filter = ({ setTagFilter }) => {
  const [tagToFilter, setTagToFilter] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTagFilter(tagToFilter);
  };

  return (
    <div>
      <form className="filterForm" onSubmit={onSubmit} action="">
        <label htmlFor="filterSelect">Select your tag:</label>
        <select
          name="filterSelect"
          id=""
          onChange={(e) => setTagToFilter(e.target.value)}
        >
          <option value="All" default>
            All
          </option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="School">School</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
    </div>
  );
};

export default Filter;
