import React from "react";

const SingleNote = (props) => {
  const updateTitle = (e) => {
    const editedValue = e.target.value;
    const editedNoteID = props.note.id;
    props.onType(editedNoteID, "title", editedValue);
  };
  const updateDescription = (e) => {
    const editedValue = e.target.value;
    const editedNoteID = props.note.id;
    props.onType(editedNoteID, "description", editedValue);
  };
  const clickDelete = () => props.remove(props.note.id);

  return (
    <li className="note">
      <input
        type="text"
        value={props.note.title}
        onChange={updateTitle}
        placeholder="What?"
        className="note__title"
      />
      <textarea
        value={props.note.description}
        onChange={updateDescription}
        placeholder="How? When? Whyyyyy?"
        className="note__description"
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default SingleNote;
