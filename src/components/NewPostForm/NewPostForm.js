import css from './NewPostForm.module.scss';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NewPostForm = ({ setContacts }) => {

  const [ formData, setFormData ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
  });
  
  const [ errorStates, setErrorStates ] = useState({});
  const [ submitDisabled, setSubmitDisabled ] = useState(true);

  const emailValidator = () => {
    const emailRegEx = /\S+@\S+\.\S+/;
    return emailRegEx.test(formData.email)?"":"Please enter a valid email address";
  }

  const phoneValidator = () => {
    const phoneRegEx = /\(\d{3}\) \d{3}-\d{4}/;
    return phoneRegEx.test(formData.phone)?"":"Please enter a valid phone number";
  }

  const phoneFormatter = (phone) => {
    phone = phone.replace(/\D/g,'');
    let newPhone = "(";
    for(let i = 0; i < phone.length && i < 10; i++) {
      newPhone += phone[i];
      (i===2) && (newPhone += ") ");
      (i===5) && (newPhone += "-");
    }
    return newPhone;
  }



  const formChangeHandler = (event) => {
    let value = event.target.value;
    if(event.target.name === "phone") {
      value = phoneFormatter(value);
    }
    setFormData({...formData, [event.target.name]: value})
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const { first_name, last_name, email, phone } = formData;
    setErrorStates({email: emailValidator(), phone: phoneValidator()})
    if(!first_name || !last_name || emailValidator() || phoneValidator()) return;
    setContacts(prev => [{id: uuidv4(), first_name, last_name, email, phone, date: (new Date()).getTime()}, ...prev])
  }

  useEffect(() => {
    const { first_name, last_name, email, phone } = formData;
    (first_name && last_name && email && phone)
      ?setSubmitDisabled(false)
      :setSubmitDisabled(true)
  }, [ formData ])

  return (
    <form className={css['user-form']}>
      <label 
        className={css['user-form__label']}
        htmlFor="first_name"
      >First Name</label>
      <input
        className={css['user-form__input']}
        type="text"
        id="first_name"
        name="first_name"
        value={formData.first_name}
        onChange={formChangeHandler}
      />
      <label
        className={css['user-form__label']}
        htmlFor="last_name"
      >Last Name</label>
      <input 
        className={css['user-form__input']}
        type="text"
        id="last_name"
        name="last_name"
        value={formData.last_name}
        onChange={formChangeHandler}
      />
      <label
        className={css['user-form__label']}
        htmlFor="email"
      >Email</label>
      <input 
        className={`${css['user-form__input']} ${errorStates.email?css['user-form__input--error']:""}`}
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={formChangeHandler}
      />
      {errorStates.email && <p className={css['user-form__error-message']}>{errorStates.email}</p>}
      <label 
        className={css['user-form__label']}
        htmlFor="phone"
      >Phone</label>
      <input 
        className={`${css['user-form__input']} ${errorStates.phone?css['user-form__input--error']:""}`}
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={formChangeHandler}
      />
      {errorStates.phone && <p className={css['user-form__error-message']}>{errorStates.phone}</p>}
      <button
        disabled={submitDisabled}
        onClick={submitHandler}
        className={css['user-form__button']}
      >Add Contact</button>
    </form>
  )
}