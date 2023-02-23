 import React, { useState } from "react";
import App from "./App";

 function Header ({ onToggleClick, buttonText }) {

    return (
      <header>
          <h2>Shopster</h2>
          <button onClick={onToggleClick}>
            {buttonText}
          </button>
      </header>
    )
  }

  export default Header