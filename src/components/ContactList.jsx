import React from 'react';

export const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <ul className="List">
      {contacts.map(contact => (
        <li className="List-contact" key={contact.id}>
          {contact.name}: {contact.number}
          <button className="Button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
