import "./styles.css";

export default function App() {
  return <Greeting name="Jessica" />;
}

function Greeting({ name }) {
  return <p>Hello, {name === "Jessica" || "Dominik" ? "Coach" : name}!</p>;
}
