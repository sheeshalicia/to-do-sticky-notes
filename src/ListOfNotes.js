import React from "react";
import SingleNote from "./Notes.js";

const keepSearchMatches = (note) => note.doesMatchSearch;

const ListOfNotes = (props) => {
  const printNote = (note) => (
    <SingleNote
      note={note}
      key={note.id}
      onType={props.onType}
      remove={props.remove}
    />
  );

  const searchMatches = props.notes.filter(keepSearchMatches);
  const allTheNotes = searchMatches.map(printNote);
  return <ul className="notes-list">{allTheNotes}</ul>;
};

export default ListOfNotes;
