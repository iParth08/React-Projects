import React, { useId } from "react";

const InputCurrency = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = {},
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  autofocus = false,
  className = "",
}) => {
  const currKeys = Object.keys(currencyOptions);
  const uniqueId = useId();
  return (
    // putting custom css given by parent of input box
    <div
      className={`bg-white px-3 py-5 rounded-lg text-2xl flex text-black/80`}
    >
      <div className="w-1/2">
        <label className=" mb-2 inline-block" htmlFor={uniqueId}>
          {label}
          <span className={`${className}`}>
            {currencyOptions[selectedCurrency]}
          </span>
        </label>
        <input
          id={uniqueId}
          className="outline-none w-full py-2 px-2 h-12 bg-white text-green-500 font-semibold rounded-lg"
          type="number"
          placeholder="Amount"
          value={amount < 0 ? "" : amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
          autoFocus={autofocus}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none font-semibold"
          disabled={currencyDisabled}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currKeys.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputCurrency;
