import React from 'react';
import PropTypes from 'prop-types';
import removeAllIcon from '../../assets/icons/remove-all.svg';
import selectAllIcon from '../../assets/icons/select-all.svg';
import styles from './checklistControls.module.scss';

/**
 * Component for select/remove all buttons.
 */
const Checkbox = ({ selectAll, removeAll }) => {
  return (
    <div className={styles.controls}>
      <button className={styles.button} type="button" onClick={selectAll}>
        <img className={styles.icon} src={selectAllIcon} type="image/svg+xml" alt="Select All" />
      </button>
      <button className={styles.button} type="button" onClick={removeAll}>
        <img className={styles.icon} src={removeAllIcon} alt="Remove All" />
      </button>
    </div>
  );
};

Checkbox.propTypes = {
  selectAll: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired,
};

export default React.memo(Checkbox);
