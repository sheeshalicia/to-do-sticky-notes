import React from "react";

const Header = (props) => (
  <header className="app-header">
    <h1 className="app-header__title">To Do</h1>
    <aside className="app-header__controls">
      <button className="add-new" onClick={props.addANote}>
        + New Note
      </button>
      <input
        type="text"
        placeholder="Type here to search..."
        className="search"
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
