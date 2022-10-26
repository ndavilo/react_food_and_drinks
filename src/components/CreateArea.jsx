import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const datetime = new Date().toLocaleString().replace(',','');

  const [note, setNote] = useState({
    user: "",
    content: "",
    time:datetime
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (note.content !== '' && note.user !== ''){
      props.onAdd(note);
      setNote({
        user: "",
        content: "",
        time:datetime
      });
      event.preventDefault();
    }
    else{
      return;
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="user"
            onChange={handleChange}
            value={note.user}
            placeholder="User ID"
          />
        )}
        {isExpanded && (
          <input
            name="time"
            type="hidden"
            onChange={handleChange}
            value={note.time}
            placeholder="time"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="List Your Orders"
          rows={isExpanded ? 3 : 1}
        />
          <button onClick={submitNote}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-check" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
            </svg>
          </button>
      </form>
    </div>
  );
}

export default CreateArea;
