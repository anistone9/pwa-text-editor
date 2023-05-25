import { openDB } from 'idb';

const initdb = async () =>
// Create a new database named 'jate' which will be using version 1 of the database
  openDB('jate', 1, {
    // Add the database schema if it has not already been initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and give it a key name of 'id' which needs to increment automatically
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Export a function to PUT to the database
export const putDb = async (content)  => {
  // Create a connection to the database and version
  const db = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readwrite');

  // Open up the object store
  const store = tx.objectStore('jate');

  await store.put({ id: 1, value: content});
};

// Export a function to GET to the database
export const getDb = async () => {
  // Create a connection to the database and version 
  const db = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readonly');

  // Open up the object store
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database
  const content = await store.getAll();
  console.log(content);

  return content?.value;
};

// Start the database
initdb();
