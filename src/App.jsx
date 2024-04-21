import "./App.css";
import RandomBgColor from "./components/RandomBgColor";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <>
      <div className="wrapper flex flex-col gap-8 p-8">
        <RandomBgColor />
        <PasswordGenerator />
        <CurrencyConvertor />
      </div>
    </>
  );
}

export default App;
