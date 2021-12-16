import { useState } from "react";
import {
  Wrapper,
  NotesHeader,
  NotesBody,
  NotesButton,
  NoteItem,
  NotesList,
  NotesAdd,
  NotesForm,
  NotesInput,
  NotesSubmit,
} from "./StyledNotes";

const Notes = () => {
  // Form Toggler State...
  const [isActive, setIsActive] = useState(false);

  // Function to toggle Form...
  const toggleActive = () => setIsActive(!isActive);

  return (
    <Wrapper>
      <NotesHeader>
        <h1>{isActive ? "Add Note" : "My Notes"}</h1>
      </NotesHeader>
      <NotesBody>
        <NotesList isactive={isActive}>
          <NoteItem>1. Drink Coffee</NoteItem>
          <NoteItem>2. Learn React</NoteItem>
          <NoteItem>3. Read a Book</NoteItem>
          <NoteItem>4. Build an App</NoteItem>
        </NotesList>
        <NotesAdd isactive={isActive}>
          <NotesForm>
            <label>Add A Note:</label>
            <NotesInput>
              <input type="text" placeholder="..." />
              <NotesSubmit>Add</NotesSubmit>
            </NotesInput>
          </NotesForm>
        </NotesAdd>
      </NotesBody>
      <NotesButton onClick={toggleActive} isactive={isActive ? 1 : 0} />
    </Wrapper>
  );
};

export default Notes;
