const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  // Your code to list contacts
}

function getContactById(contactId) {
  // Your code to get contact by ID
}

function removeContact(contactId) {
  // Your code to remove contact
}

function addContact(name, email, phone) {
  // Your code to add contact
}

module.exports = { listContacts, getContactById, removeContact, addContact };
