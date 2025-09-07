import React, { useEffect, useState } from "react";
import {
  exchangeRates,
  defaultCurrency,
  defaultInput,
} from "../../data/exchangeRates";
import { preventNegative } from "../../utils/preventNegative";
import "./styles.css";

function CurrencyConvertor() {
  const [selectedCurrency,setSelectedCurrency]=useState(defaultCurrency);
  const [value, setValue]=useState(defaultInput);
  const [exchangeRatesValue,setExchangeRateValue]=useState(0.012);


  const handleExchange =(e)=>{
       
       setValue(e.target.value);
  }

  const calculateExchangeRate=()=>{
       const curr=exchangeRates.find((c)=>c.currency===selectedCurrency)

       const rate=curr.rate;

       const finalExchangeRate=value*rate;

       setExchangeRateValue(finalExchangeRate.toFixed(3));
  }

  const handleClear =(e)=>{
     setSelectedCurrency(defaultCurrency);
     setValue(defaultInput)
  }

  useEffect( ()=>{
     calculateExchangeRate();
  },[value,selectedCurrency])

  return (
    <div>
      <div className="layout-row justify-content-space-evenly min-height mt-75">
        <div className="layout-column w-35 pa-30 card">
          <select className="mb-10" data-testid="select-currency" onChange={(e)=>setSelectedCurrency(e.target.value)}>
           {
              exchangeRates.map( (ex, index)=>(
                     <option  key={index}>{ex.currency}</option>
              ))
           }
          </select>
          <input
            className="h-50"
            type="number"
            value={value}
            onKeyDown={(e)=>preventNegative(e)}
            onChange={(e)=>handleExchange(e)}
            placeholder={`Enter value in ${selectedCurrency}`}
            data-testid="input-value"
          />
        </div>

        <div className="layout-column w-35 pa-30 card">
          <h3 className="mb-10 mt-0">USD</h3>
          <input
            className="h-50"
            type="number"
            value={exchangeRatesValue}
            readOnly
            data-testid="converted-value"
            
          />
        </div>
      </div>

      <div className="layout-row justify-content-center pa-20">
        <button data-testid="clear-values" onClick={handleClear}>Clear Input</button>
      </div>
    </div>
  );
}

export default CurrencyConvertor;