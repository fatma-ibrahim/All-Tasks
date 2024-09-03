function useRef(initialValue = null) {
  // Create an object with a `current` property
  const refObject = {
    current: initialValue,
  };

  // Return the object with the `current` property
  return refObject;
}

// Using the custom `useRef` function
const myRef = useRef(0);

// Function to update the value
function updateRef(newValue) {
  myRef.current = newValue;
  console.log(`Current ref value: ${myRef.current}`);
}

// Accessing the initial value
console.log(`Initial ref value: ${myRef.current}`);

// Updating the value
updateRef(42);

// Accessing the updated value
console.log(`Updated ref value: ${myRef.current}`);
