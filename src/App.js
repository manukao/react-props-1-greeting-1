import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Jessica" />
      <Greeting name="Dominik" />
      <Greeting name="Manuel" />
    </div>
  );
}

function Greeting({ name }) {
  return (
    <p>Hello, {name === "Jessica" || name === "Dominik" ? "Coach" : name}!</p>
  );
}
