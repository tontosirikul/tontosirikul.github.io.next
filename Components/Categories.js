import React from "react";
function Categories({ filter, categories }) {
  return (
    <div className="buttons">
      {categories.map((cate, i) => {
        return (
          <button
            type="button"
            className="btn-port"
            onClick={() => filter(cate)}
            key={i}
          >
            {cate}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
