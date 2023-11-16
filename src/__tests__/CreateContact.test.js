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

  test('Phone number is automatically formatted', () => {
    render(<NewPostForm />);
    const phoneInput = screen.getByLabelText('Phone');
    fireEvent.change(phoneInput, { target: { value: '9172242246' } });
    expect(phoneInput).toHaveValue('(917) 224-2246');
  });

  test('Error displayed if email is incorrect format', () => {
    render(<NewPostForm />);
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Phone');
    const submitButton = screen.getByText('Add Contact');

    fireEvent.change(firstNameInput, { target: { value: 'Patrick' } });
    fireEvent.change(lastNameInput, { target: { value: 'McCullough' } });
    fireEvent.change(emailInput, { target: { value: 'pmccullough@' } });
    fireEvent.change(phoneInput, { target: { value: '(917) 224-2246' } });

    fireEvent.click(submitButton);

    const emailErrorMessage = screen.getByText('Please enter a valid email address');
    expect(emailErrorMessage).toBeInTheDocument();
  });
  
  test('Error displayed if phone is incorrect format', () => {
    render(<NewPostForm />);
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Phone');
    const submitButton = screen.getByText('Add Contact');

    fireEvent.change(firstNameInput, { target: { value: 'Patrick' } });
    fireEvent.change(lastNameInput, { target: { value: 'McCullough' } });
    fireEvent.change(emailInput, { target: { value: 'pmccullough@brainstation.io' } });
    fireEvent.change(phoneInput, { target: { value: '(917) 224-224' } });

    fireEvent.click(submitButton);

    const phoneErrorMessage = screen.getByText('Please enter a valid phone number');
    expect(phoneErrorMessage).toBeInTheDocument();
  });
});