import React from 'react';
import { HomePage } from '..';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockTest } from '../../../utils/mock';

describe('HomePage', () => {
  it('Should render HomePage correctly', () => {
    render(
      <MockTest>
        <HomePage />
      </MockTest>,
    );

    screen.getByRole('button', { name: /sign in/i });
  });
});
