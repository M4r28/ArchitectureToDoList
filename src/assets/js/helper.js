import { noteStorage } from "./Storage";

// Helper
export const $ = selector => document.querySelector(selector);

export const domElements = {
  addNoteInput: $("#add-note"),
  addNoteButton: $("#add-note-button"),
  noteContainer: $("#notes"),
  noteDiv: null
};

export const renderNotes = notes => {
  domElements.noteContainer.innerHTML = notes
    .map((note, index) => {
      return `
        <div class="note col-lg-4" id=${index}>
          ${note}
        </div>
      `;
    })
    .join("");

  //only if I have the notes I can target them and add the eventListeners
  domElements.noteDiv = document.querySelectorAll(".note");
  targetNotes();
};

const targetNotes = () => {
  //check if we have a note and eventually attach an eventListener
  const noteDiv = document.querySelectorAll(".note");
  if (noteDiv !== null)
    noteDiv.forEach(oneDiv => {
      oneDiv.addEventListener("click", () => {
        const id = oneDiv.id;
        noteStorage.emit("removeItem", id);
      });
    });
};
