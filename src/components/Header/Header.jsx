const reactDescription = ["Fundamentals", "Curcial", "Core"];
import reactImg from "../../assets/react-core-concepts.png";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <h5>Nikhil Reddy</h5>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
