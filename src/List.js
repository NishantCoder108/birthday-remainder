import React from "react";

function List({ peoples }) {
  return (
    <>
      {peoples.map((people) => {
        const { id, name, age, image } = people;
        return (
          <div className=" person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default List;
