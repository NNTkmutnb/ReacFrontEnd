import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    { name: 'Natchapon', message: 'Hi there' },
    { name: 'Adam', message: 'Hello..' }
  ]

  return (
      <div className='App'>
        <Counter />
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}
        
        <Contact email='s6606022420061@email.kmutnb.ac.th' phone='0649876811' />
      </div>
  );
}

export default App;
