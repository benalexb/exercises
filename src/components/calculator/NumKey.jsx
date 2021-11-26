import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from '../../styles/calculator/NumKey.module.css';

const NumKey = ({ children, onClick, variant }, key) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const classes = clsx(styles['num-key'], { [styles[variant]]: variant });

  return (
    <button
      key={key}
      type="button"
      onClick={handleClick}
      className={classes}
    >
      {children}
    </button>
  );
};

NumKey.defaultProps = {
  onClick: null,
  variant: 'default',
};

NumKey.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'result']),
};

export default NumKey;
