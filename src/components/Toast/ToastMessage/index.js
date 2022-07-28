import PropTypes from 'prop-types';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {(type === 'error') && <img src={xCircleIcon} alt="X" />}
      {(type === 'sucess') && <img src={checkCircleIcon} alt="check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'error', 'sucess']),
};

ToastMessage.defaultProps = {
  type: 'default',
};

export default ToastMessage;
