import React from "react";
// Component receives cats data as props from CatContent

const CatGrid = ({ cats }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* Display all cats using card components 
          - Each cat should be shown in its own card
          - Maintain the grid layout structure */}
    </div>
  );
};

export default CatGrid;
