import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const b2Normal = () => {
    setExpand(false);
  };

  return (
    <div className="main_note" onDoubleClick={b2Normal}>
      <form>
        {expand ? (
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          column=""
          rows=""
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write A Notes..."
          onClick={expandIt}
        ></textarea>

        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
