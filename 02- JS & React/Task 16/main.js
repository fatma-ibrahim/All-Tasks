import * as Redux from "https://cdnjs.cloudflare.com/ajax/libs/redux/5.0.1/redux.legacy-esm.min.js";

function counter(state, action) {
  if (typeof state == "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_EVEN":
      return state % 2 === 0 ? state + 2 : state;
    case "DECREMENT_EVEN":
      return state % 2 === 0 ? state - 2 : state;
    default:
      return state;
  }
}

// Create Store
let store = Redux.createStore(counter);
const countEl = document.querySelector("#val");

function render() {
  countEl.innerHTML = store.getState().toString();
}

document.querySelector("#increment").addEventListener("click", function () {
  store.dispatch({ type: "INCREMENT" });
});

document.querySelector("#decrement").addEventListener("click", function () {
  store.dispatch({ type: "DECREMENT" });
});

document
  .querySelector("#increment-even")
  .addEventListener("click", function () {
    store.dispatch({ type: "INCREMENT_EVEN" });
  });

document
  .querySelector("#decrement-even")
  .addEventListener("click", function () {
    store.dispatch({ type: "DECREMENT_EVEN" });
  });

store.subscribe(render);
