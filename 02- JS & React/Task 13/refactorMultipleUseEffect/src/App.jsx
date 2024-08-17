import { useEffect, useState, useCallback } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  // Filter users based on input value
  const filterUsers = useCallback(() => {
    const result = users.filter((user) =>
      user.firstName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredUsers(result);
  }, [inputValue, users]);

  // Trigger filtering when inputValue or users change
  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  return (
    <>
      <header>
        <label htmlFor="search" hidden></label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Here ...."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <hr />
        {filteredUsers.map((user) => (
          <div key={user.id}>{user.firstName}</div>
        ))}
      </header>
    </>
  );
}

export default App;
