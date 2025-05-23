import styled from "styled-components"; // Import styled-components
import { useState } from "react";

function NumberSelectors() {
  const arrNumbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        {arrNumbers.map((num, i) => {
          return (
            <StyledButton
              key={i}
              onClick={() => setSelectedNumber(num)}
              isSelected={selectedNumber === num}
            >
              {num}
            </StyledButton>
          );
        })}
      </div>
      <div className="text-end pt-3">
        <h6 className="fw-bold">Select Numbers</h6>
      </div>
    </>
  );
}

export default NumberSelectors;

const StyledButton = styled.div`
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "#f8f9fa")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "black" : "#e2e6ea")};
  }
`;
