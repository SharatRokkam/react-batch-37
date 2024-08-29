import React, { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    alert(`The Email is ${email} and Password is ${password}`);
  };
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" ref={emailRef} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" ref={passRef} />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UnControlled;
