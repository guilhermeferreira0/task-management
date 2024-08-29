import { toast, Bounce } from 'react-toastify';
type NotifyProps = 'success' | 'warning';

export function notify(type: NotifyProps, message: string) {
  if (type === 'success') {
    return toast.success(message, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
    });
  }

  return toast.error(message, {
    position: 'bottom-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce,
  });
}
