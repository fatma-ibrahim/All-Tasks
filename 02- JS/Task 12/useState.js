function useState(initValue) {
  let state = initValue;

  function setState(newVal) {
    state = newVal;
    render();
  }

  function getState() {
    return state;
  }

  return [getState, setState];
}

const [count, setCount] = useState(0);

function incrementCounter() {
  setCount(count() + 1);
}

const button = document.querySelector("button");
const app = document.querySelector("#root");

function render() {
  app.innerHTML = `<h2>Counter : ${count()} </h2>`;
}

document.addEventListener("DOMContentLoaded", render);

button.addEventListener("click", incrementCounter);
