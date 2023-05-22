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
  console.log('PUT to the database');

  // Create a connection to the database and version
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the object store
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content
  const request = store.add({ content: content });

  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};
;

// Export a function to GET to the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database and version 
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the object store
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database
  const request = store.getAll();

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
};

/*
// Export a function to DELETE from the database
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);

  // Create a connection to the database and version
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the object store
  const store = tx.objectStore('jate');

  // Use the .delete() method to get all data in the database
  const request = store.delete(id);

  // Get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};
*/

// Start the database
initdb();
