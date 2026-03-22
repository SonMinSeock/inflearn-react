import { useContext, useState } from 'react';
import './ContactEditor.css';
import { ContactDispatchContext } from '../contexts/contactContext';

export default function ContactEditor() {
  const { onCreateContact } = useContext(ContactDispatchContext);
  const [info, setInfo] = useState({
    name: '',
    contact: '',
  });

  const onChangeInfo = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    if (info.name.trim() === '' || info.contact.trim() === '') {
      alert('이름과 연락처를 입력해 주세요.');
      return;
    }

    onCreateContact(info.name, info.contact);

    setInfo({ name: '', contact: '' });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input className="name" name={'name'} value={info.name} placeholder="이름 ..." onChange={onChangeInfo} />
        <input
          className="contact"
          name={'contact'}
          value={info.contact}
          placeholder="연락처(이메일) ..."
          onChange={onChangeInfo}
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
