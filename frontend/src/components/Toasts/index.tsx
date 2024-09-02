import React from 'react';
import { ToastContainer, Bounce } from 'react-toastify';

export function Toast() {
  return (
    <div role='alertdialog'>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}
