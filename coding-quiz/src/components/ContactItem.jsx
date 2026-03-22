import { memo, useContext } from 'react';
import './ContactItem.css';
import { ContactDispatchContext } from '../contexts/contactContext';

function ContactItem({ id, name, contact }) {
  const { onDeleteContact } = useContext(ContactDispatchContext);
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onDeleteContact(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
