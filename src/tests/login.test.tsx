import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

describe('Login Component', () => {
  it('fills in name and email fields', () => {
    render(
      <Login
        onSubmitSuccess={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const nameInput = screen.getByPlaceholderText('Enter Name');
    const emailInput = screen.getByPlaceholderText('Enter Email');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
  });
});
