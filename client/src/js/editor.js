import { putDb, getDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      this.editor.setValue(data || localData || header);
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb(localStorage.getItem('content'));
    });
  }
}

/*
const form = document.getElementById('contact-form');

// Adds deleteCard() to the global scope so each card has access to it.
window.deleteCard = (e) => {
// Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.id);

  // Delete the card
  deleteDb(id);

  // Reload the DOM
  fetchCards();
};

form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault();
  const name = form.elements['name'].value;
  const home = form.elements['home-phone'].value;
  const cell = form.elements['cell-phone'].value;
  const email = form.elements['email'].value;

  // Post form data to IndexedDB
  postDb(name, home, cell, email);

  // Submit the form
  form.reset();

  // Reload the DOM
  fetchCards();
});

const fetchCards = async () => {
// Grab card data from IndexedDB
  const result = await getDb();

  let card = ` `;

  // Loop through the data and create the contact card
  for (let data of result) {
    console.log(data);
    card += `
    <div class="card card-rounded col-md-3 m-2">
      <div class="card-header card-rounded">
        <h1>${data.name}</h1>
      </div>
      <div class="card-body">
        <p>Home Phone: ${data.home_phone}</p>
        <p>Cell Phone: ${data.cell_phone}</p>
        <p>Email: ${data.email}</p>
      </div>
      <div class="flex-row justify-flex-end p-1">
        <button class="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
      </div>
    </div>
    `;
  }

  // Setting innerHTML as card variable
  document.getElementById('card-group').innerHTML = card;
};

// Fetch cards upon being loaded.
fetchCards();
*/
