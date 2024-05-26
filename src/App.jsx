import './App.css';
import { LanguageProvider } from './components/LanguageContext';
import LanguageSwicher from './components/LanguageSwitcher';
import TextComponent from './components/TextComponent';

function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <LanguageSwicher />
      <TextComponent />
    </div>
    </LanguageProvider>
  );
}

export default App;
