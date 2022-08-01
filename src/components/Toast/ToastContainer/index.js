import { useEffect, useState } from 'react';
import { addListenerToast, removeListenerToast } from '../../../utils/addToast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    addListenerToast('addtoast', handleAddToast);

    return () => {
      removeListenerToast('addtoast', handleAddToast);
    };
  }, []);

  function handleRemoveMessage(id) {
    setMessages((prevState) => (
      prevState.filter((message) => id !== message.id)
    ));
  }

  return (
    <Container>

      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
