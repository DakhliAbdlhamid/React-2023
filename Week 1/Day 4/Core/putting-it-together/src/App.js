import './App.css';
import PersonCard from './component/person_Card';


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
    </div>
  );
};

export default App;