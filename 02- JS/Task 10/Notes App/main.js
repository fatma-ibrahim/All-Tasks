const url = "http://localhost:3000/notes";

class Note {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }
}

class NoteUi {
  static addNoteToUI(note, id) {
    const row = document.getElementById("notesRow");
    const div = document.createElement("div");
    div.className = `col-lg-4 col-md-6 col-sm-12 my-2`;
    div.setAttribute("data-id", id);
    div.innerHTML = `
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${note.title}</div>
        <div class="card-body">
          <p class="card-text">${note.desc}</p>
          <button class="btn btn-success" onclick="editNoteForm('${id}')">Update Note</button>
          <button class="btn btn-danger" onclick="deleteNote('${id}')">Delete Note</button>
        </div>
      </div>
    `;
    row.appendChild(div);
  }

  static resetInputs() {
    document.querySelector("#title").value = "";
    document.querySelector("#desc").value = "";
    document.querySelector("#submit-btn").value = "Add Note";
    document.querySelector("#submit-btn").dataset.action = "add";
    document.querySelector("#submit-btn").removeAttribute("data-id");
  }

  static showMessages(textMessage, clsName) {
    const div = document.createElement("div");
    div.className = `alert alert-${clsName} alert-dismissible fade show`;
    div.role = "alert";

    let icon;
    switch (clsName) {
      case "success":
        icon = "<i class='fas fa-check-circle'></i> ";
        break;
      case "danger":
        icon = "<i class='fas fa-times-circle'></i> ";
        break;
      case "warning":
        icon = "<i class='fas fa-exclamation-circle'></i> ";
        break;
      default:
        icon = "";
    }

    div.innerHTML = `${icon}${textMessage}`;
    const formSection = document.querySelector(".form-section");
    const form = document.querySelector("form");
    formSection.insertBefore(div, form);

    setTimeout(() => {
      div.classList.remove("show");
      setTimeout(() => {
        div.remove();
      }, 150);
    }, 5000);
  }
}

async function getNotes() {
  const res = await fetch(url, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

async function renderNotes() {
  const notes = await getNotes();
  const row = document.getElementById("notesRow");
  row.innerHTML = "";
  notes.forEach((note) => {
    NoteUi.addNoteToUI(note, note.id);
  });
}

async function addNote(event) {
  event.preventDefault();
  const titleValue = document.querySelector("#title").value;
  const descValue = document.querySelector("#desc").value;

  if (titleValue === "" || descValue === "") {
    NoteUi.showMessages("All Inputs Are Required", "danger");
    return;
  }

  const noteObj = new Note(titleValue, descValue);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(noteObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (res.ok) {
    NoteUi.showMessages("Note Added Successfully", "success");
    NoteUi.resetInputs();
    renderNotes();
  }
}

async function updateNote() {
  const id = document.querySelector("#submit-btn").dataset.id;
  const titleValue = document.querySelector("#title").value;
  const descValue = document.querySelector("#desc").value;

  if (titleValue === "" || descValue === "") {
    NoteUi.showMessages("All Inputs Are Required", "danger");
    return;
  }

  const noteObj = new Note(titleValue, descValue);

  const res = await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(noteObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (res.ok) {
    NoteUi.showMessages("Note Updated Successfully", "success");
    NoteUi.resetInputs();
    renderNotes();
  }
}

function editNoteForm(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((note) => {
      document.querySelector("#title").value = note.title;
      document.querySelector("#desc").value = note.desc;
      document.querySelector("#submit-btn").value = "Update Note";
      document.querySelector("#submit-btn").dataset.action = "update";
      document.querySelector("#submit-btn").dataset.id = id;
    });
}

async function deleteNote(id) {
  if (confirm("Are You Sure?")) {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      NoteUi.showMessages("Note Deleted Successfully", "warning");
      renderNotes();
    }
  }
}

document.addEventListener("DOMContentLoaded", renderNotes);
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const action = document.querySelector("#submit-btn").dataset.action;
  if (action === "add") {
    addNote(event);
  } else if (action === "update") {
    updateNote();
  }
});
