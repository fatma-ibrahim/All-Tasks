// import { useEffect, useRef } from "react";

// function App() {
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//       console.log("Effect is running");
//       isMounted.current = true;
//     }
//   }, []);

//   return <div>Hello, World!</div>;
// }

// export default App;

// or

import { useEffect, useState } from "react";

function App() {
  const [isFetched, setIsFetched] = useState(false); // State to track if data has been fetched

  useEffect(() => {
    if (!isFetched) {
      console.log("Effect is running");
      setIsFetched(true); // Set the state to indicate the effect has run
    }
  }, [isFetched]); // Dependency array includes `isFetched`

  return <div>Hello, World!</div>;
}

export default App;
