import './App.css';
import PersonCard from './Components/PersonCard';


const App = () => {
  return (
    <div>
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
};

export default App;