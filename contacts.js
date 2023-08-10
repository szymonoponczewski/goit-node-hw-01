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
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts:", err);

      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((entry) => entry.id === contactId);
    if (contact) {
      console.log("Contact found:", contact);
    } else {
      console.log("Contact not found.");
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts:", err);

      return;
    }
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter((entry) => entry.id !== contactId);
    fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      (err) => {
        if (err) {
          console.error("Error removing contact:", err);

          return;
        }
        console.log("Contact removed successfully.");
      }
    );
  });
}

// TODO: generating unique IDs for new entries!

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts:", err);

      return;
    }
    const contacts = JSON.parse(data);
    const newContactId = Date.now().toString();

    const newContact = { id: newContactId, name, email, phone };
    const updatedContacts = [...contacts, newContact];
    fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      (err) => {
        if (err) {
          console.error("Error adding contact:", err);

          return;
        }
        console.log("Contact added successfully.");
      }
    );
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
