import ToastMessage from '../ToastMessage';
import { Container } from './styles';

function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default Toast" />
      <ToastMessage text="Erro Toast" type="error" />
      <ToastMessage text="Sucess Toast" type="sucess" />
    </Container>
  );
}

export default ToastContainer;
