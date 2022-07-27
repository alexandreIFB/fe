import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import Spinner from '../Spinner';

function Button({
  children, isLoading, disabled, type,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      isLoading={isLoading}
    >
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,
};

export default Button;
