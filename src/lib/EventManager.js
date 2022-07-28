export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    const listeners = this.listeners[event];
    if (!listeners) {
      return;
    }

    listeners.forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter((listener) => (
      listener !== listenerToRemove
    ));

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

toastEventManager.on('addtoast', (payload) => {
  console.log('addtoast listener1', payload);
});

function listener2(payload) {
  console.log('addtoast listener2', payload);
}

toastEventManager.on('addtoast', listener2);

toastEventManager.removeListener('addtoast', (payload) => {
  console.log('addtoast listener1', payload);
});

toastEventManager.removeListener('addtoast', listener2);

toastEventManager.emit('addtoast', {
  type: 'sucess',
  text: 'Contato cadastrado com sucesso!',
});

console.log(toastEventManager);
