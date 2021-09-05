import React from "react";
// import * as data from "../data";
import { listCategories } from "../data";
function Form() {
  return (
    <form>
      <input name="todo" type="text" />
      <div className="group">
        <select name="category">
          {listCategories.map((category) => {
            return (
              <option
                key={category.id}
                style={{ backgroundImage: `url(${category.icon})` }}
                value={category.name_category}
              >
                {category.name_category}
              </option>
            );
          })}
        </select>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
