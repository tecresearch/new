import React, { useState, useEffect } from "react";
import {
  exchangeRates,
  defaultCurrency,
  defaultInput,
} from "../../data/exchangeRates";
import { preventNegative } from "../../utils/preventNegative";
import "./styles.css";

function CurrencyConvertor() {
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
  const [inputValue, setInputValue] = useState(defaultInput);
  const [convertedValue, setConvertedValue] = useState("");

  // find rate for selected currency
  const getRate = (currency) =>
    exchangeRates.find((c) => c.currency === currency)?.rate || 1;

  // update conversion whenever input or currency changes
  useEffect(() => {
    const rate = getRate(selectedCurrency);
    setConvertedValue((inputValue * rate).toFixed(3));
  }, [inputValue, selectedCurrency]);

  // reset handler
  const handleReset = () => {
    setSelectedCurrency(defaultCurrency);
    setInputValue(defaultInput);
  };

  return (
    <div>
      <div className="layout-row justify-content-space-evenly min-height mt-75">
        {/* Left side input */}
        <div className="layout-column w-35 pa-30 card">
          <select
            className="mb-10"
            data-testid="select-currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {exchangeRates.map(({ currency }) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <input
            className="h-50"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
            onKeyDown={preventNegative}
            placeholder={`Enter value in ${selectedCurrency}`}
            data-testid="input-value"
          />
        </div>

        {/* Right side output */}
        <div className="layout-column w-35 pa-30 card">
          <h3 className="mb-10 mt-0">USD</h3>
          <input
            className="h-50"
            type="number"
            value={convertedValue}
            readOnly
            data-testid="converted-value"
          />
        </div>
      </div>

      {/* Reset button */}
      <div className="layout-row justify-content-center pa-20">
        <button onClick={handleReset} data-testid="clear-values">
          Reset
        </button>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
