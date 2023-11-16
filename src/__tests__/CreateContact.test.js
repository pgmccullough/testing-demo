import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extra matchers

import { App } from '../App';
import { NewPostForm } from "../components/NewPostForm/NewPostForm";
import { Posts } from '../components/Posts/Posts';

import { users } from '../utils/userData';

describe('MyForm component', () => {

  test('Post name displayed', () => {
    render(<Posts contacts={users} />);
    const contactName = screen.getByText('Williams, Alice');
    expect(contactName).toBeInTheDocument();
  });

  test('Correct number of posts displayed', () => {
    const { container } = render(<Posts contacts={users} />);
    const posts = container.querySelectorAll('.post__header');
    expect(posts.length).toBe(10);
  })

  // test('Adding contact works', () => {
  //   let fakeState = users;
  //   const onFormSubmit = (data) => {
  //     fakeState = [data, ...users];
  //   };

  //   render(<NewPostForm setContacts={onFormSubmit} />);
  //   const { container } = render(<Posts contacts={fakeState} />);
    
  //   const firstNameInput = screen.getByLabelText('First Name');
  //   const lastNameInput = screen.getByLabelText('Last Name');
  //   const emailInput = screen.getByLabelText('Email');
  //   const phoneInput = screen.getByLabelText('Phone');
  //   const submitButton = screen.getByText('Add Contact');

  //   fireEvent.change(firstNameInput, { target: { value: 'Patrick' } });
  //   fireEvent.change(lastNameInput, { target: { value: 'McCullough' } });
  //   fireEvent.change(emailInput, { target: { value: 'pmccullough@brainstation.io' } });
  //   fireEvent.change(phoneInput, { target: { value: '(917) 224-2246' } });

  //   fireEvent.click(submitButton);

  //   const posts = container.querySelectorAll('.post__header');
  //   expect(posts.length).toBe(11);

  // });
  
});