import React from "react";

function Count() {
  return (
    <div>
      <button className="button5" style={{ borderColor: "#50a3a2" }}>
        50
      </button>
      <button className="telegram">
        <i class="fas fa-telegram-plane"></i> Connect Telegram
      </button>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default Count;
