import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FooterPage } from '..';
import { MockTest } from '../../../utils/mock';

describe('Modal', () => {
  it('Should render Footer correctly', () => {
    render(
      <MockTest>
        <FooterPage />
      </MockTest>
    );

    const heading = screen.getByRole('heading', { name: /about the project/i });
    expect(heading).toBeInTheDocument();
  }); 
});
