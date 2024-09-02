import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockTest } from '../../../utils/mock';
import { Toast } from '..';
import { notify } from '../notify';

describe('HomePage', () => {
  it('Should render Toasts correctly', async () => {
    render(
      <MockTest>
        <Toast />
      </MockTest>,
    );

    const toastElement = screen.getByRole('alertdialog');
    expect(toastElement).toBeVisible();
    
    notify('success', 'toast');
    const notification = await screen.findByText(/toast/);
    expect(notification).toBeInTheDocument();
  });
});