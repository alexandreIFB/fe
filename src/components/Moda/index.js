import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Container, Footer, Overlay } from './styles';

function Modal({ title, description, danger }) {
  return (
    ReactDOM.createPortal(
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Footer>
            <button type="button" className="button-cancel">Cancelar</button>
            <Button type="button" danger={danger}>
              Deletar
            </Button>
          </Footer>
        </Container>
      </Overlay>,
      document.getElementById('modals-root'),
    )
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
