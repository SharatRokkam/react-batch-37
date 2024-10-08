import { useState } from "react";

const WithCounter = (OldComponent, incrementBy = 1) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        increment={() => setCount(count + incrementBy)}
        name="withCounter"
      />
    );
  };
};

export default WithCounter;
