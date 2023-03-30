import React, { useState } from "react";

type Props = {};

const data = [
  { id: 1, name: "naga", age: 23, isActive: true },
  { id: 2, name: "nagi", age: 24, isActive: false },
  { id: 3, name: "nage", age: 25, isActive: true },
  { id: 4, name: "nagu", age: 26, isActive: false },
  { id: 5, name: "nagj", age: 28, isActive: true },
];

const Sample = (props: Props) => {
  const [allData, setData] = useState(data);

  return (
    <div className="border-2 border-black-600">
      {allData.map((eachData) => {
        return (
          <div key={eachData.id}>
            <p>{eachData.name}</p>
            <input
              type="checkbox"
              checked={eachData.isActive}
              onChange={(e) => {
                setData([
                  ...allData,
                  { ...eachData, isActive: e.target.checked },
                ]);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sample;
