import React, { useState } from "react";
import HoverTip from "../utils/HoverTip";
import InputCurrency from "../utils/InputCurrency";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConvertor = () => {
  const [tooltip, setTooltip] = useState(false);
  const projectData = {
    project: "Currency Converter",
    description: [
      "CSS-Prop : Sending class property as props",
      "CSS-Bg-Image : Cover fit image as background",
      "Component Reusable : define multiple prop for a component to customized used in multiple places",
      "Number : number persistent in positive, str to number",
      "Custom Hooks : Custom hook for fetching API and parsing data",
      "Render from Map : map data from API into components as elements",
      "Swap : how to swap states value",
      "Functions as Props : sending functions defined in parent as props",
      "Error Handling : handling basic errors while using values which can sometimes be undefined/null",
      "useEffect : for autocalling functions to fetch API on changes in states/selection",
      "useId : to generate unique id in component for multiple rendered",
    ],
  };

  //   states to hold data
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  //   hooks call
  const currencyInfo = useCurrencyInfo(fromCurrency);
  //   const currencyOptions = Object.keys(currencyInfo); // from useCurrencyInfo

  // Limiting the options of currency and giving country names
  const CurrencyShorts = {
    aud: "Australian Dollar",
    cad: "Canadian Dollar",
    chf: "Swiss Franc",
    cny: "Chinese Yuan",
    egp: "Egyptian Pound",
    eur: "Australian Euro",
    gbp: "UK Pound",
    hkd: "Hong Kong Dollar",
    idr: "Indonesian Rupiah",
    inr: "Indian Rupee",
    iqd: "Iraqi Dinar",
    jpy: "Japanese Yen",
    krw: "South Korean Won",
    lrk: "Sri Lankan Rupee",
    mad: "Moroccan Dirham",
    mxn: "Mexican Peso",
    myr: "Malaysian Ringgit",
    nzd: "New Zealand Dollar",
    pkr: "Pakistani Rupee",
    sgd: "Singapore Dollar",
    usd: "American Dollar",
    zwd: "Zimbabwe Dollar",
  };

  //   convertion function
  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  //swap function
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div>
      {/* Project Title */}
      <h2 className="text-3xl font-bold text-green-500 mb-10">
        Project 3 : &nbsp;
        <span className="text-white underline underline-offset-4">
          Currency Converter
        </span>
      </h2>

      {/* Project Box */}
      <div
        className="mt-5 flex flex-col justify-center items-center h-[32rem] max-w-[90%] mx-auto relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(
            "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          )`,
        }}
      >
        {/* ToolTip */}
        <div
          className="tooltip h-7 w-7 rounded-full bg-white flex justify-center items-center absolute -top-3 -right-3"
          onClick={() => setTooltip(!tooltip)}
        >
          🐾
        </div>

        {
          /* Tooltip */

          tooltip && (
            <HoverTip
              project={projectData.project}
              description={projectData.description}
            />
          )
        }

        {/* Project Code */}
        <div className="h-[auto] w-[45rem] border-4 border-green-300 rounded-2xl bg-green-200 bg-opacity-50 px-5 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency();
            }}
          >
            <div className="w-full mb-1">
              <InputCurrency
                label="From"
                selectedCurrency={fromCurrency}
                currencyOptions={CurrencyShorts}
                amount={amount}
                onAmountChange={(val) => setAmount(val)}
                onCurrencyChange={(currStr) => setFromCurrency(currStr)}
                className="text-2xl text-blue-500 px-2"
                autofocus
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-4 py-3 text-2xl"
                onClick={swapCurrencies}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputCurrency
                label="To"
                selectedCurrency={toCurrency}
                currencyOptions={CurrencyShorts}
                amount={convertedAmount}
                onAmountChange={(val) => setConvertedAmount(val)}
                onCurrencyChange={(currStr) => setToCurrency(currStr)}
                amountDisabled
                className="text-2xl text-red-500 px-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 shadow-md shadow-stone-50 inset-2 text-white px-4 py-5 text-xl rounded-lg"
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
