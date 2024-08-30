import React from 'react';
import { Modal } from '..';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockTest } from '../../../utils/mock';
import { FormNewTask } from '../FormNewTask';
import { FormUpdateTask } from '../FormUpdateTask';

describe('Modal', () => {
  it('Should render and click button close Modal New Task correctly', async () => {
    const setState = jest.fn();
    render(
      <MockTest>
        <Modal onClose={setState} open={true}>
          <FormNewTask />
        </Modal>
      </MockTest>,
    );

    const button = screen.getByRole('button', { name: /x/i });
    fireEvent.click(button);
    expect(setState).toHaveBeenCalled();
  });

  it('Should render and click button close Modal Update Task correctly', async () => {
    const setState = jest.fn();
    render(
      <MockTest>
        <Modal onClose={setState} open={true}>
          <FormUpdateTask />
        </Modal>
      </MockTest>,
    );

    const button = screen.getByRole('button', { name: /x/i });
    fireEvent.click(button);
    expect(setState).toHaveBeenCalled();
  });
});
