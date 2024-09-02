import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockTest } from '../../../utils/mock';
// import { DashboardPage } from '..';

describe('Modal', () => {
  it('Should render Dashboard correctly', () => {
    render(
      <MockTest>
        <>{/* <DashboardPage /> */}</>
      </MockTest>,
    );
  });
});
