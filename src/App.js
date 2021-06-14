import logo from './logo.svg';
import './App.css';
import khiaalImg from './khiaal.png';

function Header(props) {
  console.log(props);
  return (
      <h1>{props.name}'s Website</h1>
  );
}

function Main(props) {
  return (
    <section>
      <img src="https://github.com/hanabarazandeh.png" height={300} alt="my github picture"/>
      <ul>
        {props.dishes.map((dish)=>(
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <section>
      <p>{props.year}</p>
    </section>
  );
}

const dishes=[
  "pasta",
  "butter chicken",
  "joojeh kabab"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title:dish}));
console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Hana" />
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
