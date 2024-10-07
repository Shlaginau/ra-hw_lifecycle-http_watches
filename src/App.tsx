import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <AdBanner />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;