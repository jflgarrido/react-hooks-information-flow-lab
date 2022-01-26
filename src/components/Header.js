import React from "react";

function Header({onDarkModeClick, toggle}) {

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {toggle} Mode
        </button>
      </header>
    )
}

export default Header;