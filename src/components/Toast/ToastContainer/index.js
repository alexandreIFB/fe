import { useEffect, useState } from 'react';
import { addListenerToast, removeListenerToast } from '../../../utils/addToast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

function ToastContainer() {
  console.log('r');
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

  return (
    <Container>

      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
