import React from 'react';
import { NavBar } from '..';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockTest } from '../../../utils/mock';

describe('HomePage', () => {
  it('Should render Header correctly', () => {
    render(
      <MockTest>
        <NavBar />
      </MockTest>,
    );

    screen.getByPlaceholderText(/search/i);
    screen.getByAltText(/default profile/i);
  });
});
