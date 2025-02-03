src/components/Filter/FilterComponents.js
import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  background: #f2b33d;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #d9992c;
  }
`;