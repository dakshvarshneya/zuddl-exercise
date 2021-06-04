import "../styles/App.css";

import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";

function CardEditor(props) {
    const { onSave, onCancel, onDelete, adding } = props;
    const [text,setText] = useState(props.text||"");

    const handleChangeText = event => setText(event.target.value);

    const onEnter = e => {
        if (e.keyCode === 13) {
        e.preventDefault();
        props.onSave(text);
        }
    };

    return (
      <div className="Edit-Card">
        <div className="Card">
          <TextareaAutosize
            autoFocus
            className="Edit-Card-Textarea"
            placeholder="Enter the text for this card..."
            value={text}
            onChange={handleChangeText}
            onKeyDown={onEnter}
          />
        </div>
        <EditButtons
          handleSave={() => onSave(text)}
          saveLabel={adding ? "Add card" : "Save"}
          handleDelete={onDelete}
          handleCancel={onCancel}
        />
      </div>
    );
}

export default CardEditor;