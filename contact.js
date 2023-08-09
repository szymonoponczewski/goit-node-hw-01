const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts:", err);

      return;
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading contacts:', err);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    if (contact) {
      console.log('Contact found:', contact);
    } else {
      console.log('Contact not found.');
    }
  });
}

  function removeContact(contactId) {
    // Your code to remove contact
  }

  function addContact(name, email, phone) {
    // Your code to add contact
  }

  module.exports = { listContacts, getContactById, removeContact, addContact };

