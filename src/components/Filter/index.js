src/components/Filter/index.js
import React, { useState } from "react";
import { FilterContainer, Select, Button } from "./FilterComponents";

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    age: "",
    caste: "",
    country: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <FilterContainer>
      <Select name="age" onChange={handleChange}>
        <option value="">Select Age</option>
        <option value="18-25">18-25</option>
        <option value="26-35">26-35</option>
        <option value="36-45">36-45</option>
      </Select>
      <Select name="caste" onChange={handleChange}>
        <option value="">Select Caste</option>
        <option value="General">General</option>
        <option value="OBC">OBC</option>
        <option value="SC/ST">SC/ST</option>
      </Select>
      <Select name="country" onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </Select>
      <Select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Button onClick={handleFilter}>Apply Filters</Button>
    </FilterContainer>
  );
};

export default Filter;
