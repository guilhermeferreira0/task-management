import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginPage } from '../Login';
import { RegisterPage } from '../Register';
import { MockTest } from '../../../utils/mock';

describe('Login', () => {
  it('Should render Login correctly', () => {
    render(
      <MockTest>
        <LoginPage setPage={() => {}} />{' '}
      </MockTest>,
    );

    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeInTheDocument();
  });

  it('Should render Register correctly', () => {
    render(
      <MockTest>
        <RegisterPage setPage={() => false} />{' '}
      </MockTest>,
    );
    const button = screen.getByRole('button', { name: /register/i });
    expect(button).toBeInTheDocument();
  });
});
