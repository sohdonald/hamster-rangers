// filter the ranger list by color
import React from "react";

function ColorFilter({ selectedColor, onColorChange}) {
    return (
        <>
          <select
            name="filter-color"
            value={selectedColor}
            onChange={(e) => onColorChange(e.target.value)}
          >
            <option value="All">Filter by Color</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="pink">pink</option>
          </select>
          </>
          )
}

export default ColorFilter;