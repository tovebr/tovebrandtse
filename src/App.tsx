import Home from './components/Home/Home';
import Section from './components/Section/Section';
import { data } from './workSamples';
import './App.scss';

function App() {
  const sections = Object.entries(data).map(([key, value]) => {
    return <Section key={key} id={key} data={value} />;
  });
  return (
    <>
      <Home />
      {sections}
    </>
  );
}

export default App;
