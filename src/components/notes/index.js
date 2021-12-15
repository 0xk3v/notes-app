import {
  Wrapper,
  NotesHeader,
  NotesBody,
  NotesButton,
  NoteItem,
} from "./StyledNotes";

const Notes = () => {
  return (
    <Wrapper>
      <NotesHeader>
        <h1>My Notes</h1>
      </NotesHeader>
      <NotesBody>
        <NoteItem>1. Drink Coffee</NoteItem>
        <NoteItem>2. Learn React</NoteItem>
        <NoteItem>3. Read a Book</NoteItem>
        <NoteItem>4. Build an App</NoteItem>
      </NotesBody>
      <NotesButton />
    </Wrapper>
  );
};

export default Notes;
