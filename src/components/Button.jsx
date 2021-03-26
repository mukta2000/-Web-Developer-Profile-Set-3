import React from "react";

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

function Button() {
  return (
    <div class="btn-group">
      <select>
        <option selected value="coconut">
          INR
        </option>
      </select>
      <select>
        <option value="grapefruit">USDT</option>
        <option value="lime">BTC</option>
        <option selected value="coconut">
          USDT
        </option>
        <option value="mango">XRP</option>
        <option value="grapefruit">TRX</option>
        <option value="lime">DASH</option>
        <option selected value="coconut">
          ZEC
        </option>
        <option value="mango">XEM</option>
      </select>
      <select>
        <option selected value="coconut">
          BUY USDT
        </option>
      </select>
    </div>
  );
}

export default Button;
