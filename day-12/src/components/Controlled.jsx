import React, { useState } from "react";

const Controlled = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name is ${data}`);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name :
            <input type="text" value={data} onChange={handleChange} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Controlled;
