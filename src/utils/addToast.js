import EventManager from '../lib/EventManager';

const toastEventManager = new EventManager();

export function addToast({ type, text, duration }) {
  toastEventManager.emit('addtoast', {
    type,
    text,
    duration,
  });
}

export function addListenerToast(event, listener) {
  toastEventManager.on(event, listener);
}

export function removeListenerToast(event, listenerToRemove) {
  toastEventManager.removeListener(event, listenerToRemove);
}
