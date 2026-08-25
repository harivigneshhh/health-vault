import Login from "./Login";

function App() {
  const handleLogin = () => {
    alert("Login successful!");
  };

  const handleRegister = () => {
    alert("Registration page coming soon!");
  };

  return (
    <Login
      onLogin={handleLogin}
      onRegister={handleRegister}
    />
  );
}

export default App;