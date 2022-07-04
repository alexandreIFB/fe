import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Container, Footer, Overlay } from './styles';

function Modal({ title, description }) {
  return (
    <Overlay>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        <Footer>
          <button type="button" className="button-cancel">Cancelar</button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Modal;
