function useEffect(callback, dependencies) {
  let hasChanged = true;

  // Check if dependencies have changed
  if (dependencies) {
    hasChanged = dependencies.some((dep, i) => dep !== useEffect.prevDeps[i]);
  }

  // Execute the callback if dependencies have changed
  if (hasChanged) {
    callback();
  }

  // Store the current dependencies for the next run
  useEffect.prevDeps = dependencies;
}

// Initialize previous dependencies
useEffect.prevDeps = [];

// Example of using useEffect
let counts = 0;
function incrementCounter() {
  counts += 1;
  render();
}

function render() {
  console.log(`Counter updated to: ${counts}`);

  // Using useEffect to check for changes in counts
  useEffect(() => {
    console.log(`Current counts value: ${counts}`);
  }, [counts]); // Effect runs only if the counts value changes
}

// Run render when the application starts
document.addEventListener("DOMContentLoaded", () => {
  render();

  // Increment counter to update the UI
  incrementCounter(); // useEffect will be triggered here because counts has changed
});
