import EventManager from '../lib/EventManager';

export function addToast({ type, text }) {
  const toastEventManager = new EventManager();

  toastEventManager.emit('addtoast', {
    type,
    text,
  });
}
