import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  function handleEditClick() {
    if (isEditing) {
      onChangeName(symbol, editedName); // שולח את השם ל-App
    }
    setIsEditing((prev) => !prev);
  }

  function handleChange(event) {
    setEditedName(event.target.value);
  }

  let playerContent = <span className="player-name">{name}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerContent = (
      <input type="text" value={editedName} onChange={handleChange} required />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
