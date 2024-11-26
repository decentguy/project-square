import React from 'react';

interface FiltersProps {
  onSort: (sortOption: string) => void;
  onFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSort, onFilter }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search brands..."
        onChange={(e) => onFilter(e.target.value)}
      />
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default Filters;
