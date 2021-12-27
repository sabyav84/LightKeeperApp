import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function QuoteBar({ setQuoteName, quotePrices, quoteName }) {
  return (
    <div className='quote-bar'>
      <input
        type='text'
        value={quoteName}
        placeholder='Quote Lookup'
        onChange={(e) => {
          e.preventDefault();
          setQuoteName(e.target.value);
        }}
      />

      <div className='prices'>
        <ul>
          <li>Price {quotePrices.current ? quotePrices.current : "-----"} </li>
          <li>
            High
            <FaArrowUp style={{ color: "green", margin: "0 0.2rem" }} />
            {quotePrices.high ? quotePrices.high : "-----"}
          </li>
          <li>
            Low
            <FaArrowDown style={{ color: "red", margin: "0 0.2rem" }} />
            {quotePrices.low ? quotePrices.low : "-----"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuoteBar;
