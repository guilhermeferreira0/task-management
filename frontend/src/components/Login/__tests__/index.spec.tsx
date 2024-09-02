import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginPage } from '../Login';
import { RegisterPage } from '../Register';
import { MockTest } from '../../../utils/mock';

describe('Login', () => {
  it('Should render Login correctly', () => {
    const setState = jest.fn();
    render(
      <MockTest>
        <LoginPage setPage={setState} />
      </MockTest>,
    );

    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();

    const redirect = screen.getByRole('button', { name: /Sign Up/i });
    fireEvent.click(redirect);
    expect(setState).toHaveBeenCalled();
  });

  it('Should render Register correctly', () => {
    const setState = jest.fn();
    render(
      <MockTest>
        <RegisterPage setPage={setState} />
      </MockTest>,
    );
    const button = screen.getByRole('button', { name: /register/i });
    expect(button).toBeInTheDocument();

    const redirect = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(redirect);
    expect(setState).toHaveBeenCalled();
  });
});
