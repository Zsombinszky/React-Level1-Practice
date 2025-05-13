import React from "react";
// Import the 'cat.svg' file from the assets folder

const CatHeader = () => {
  return (
    <header className="h-[20%] w-full bg-lime-300 flex">
      <div>
        {/* Create an image element that displays the imported SVG file
            - Set width and height
            - Provide alt text */}
      </div>
      <div className="flex flex-col">
        {/* Create a heading with welcome text
            - The word "cat" should be emphasized (color, underline) */}
        {/* Create a short introductory text about shelter cats */}
      </div>
    </header>
  );
};

export default CatHeader;
