import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import messages from 'utils/messages';
import styles from './checkbox.module.scss';

/**
 * Checkbox component with custom styles.
 */
const Checkbox = ({ name, count, checked, hasChildren, expanded, toggleExpand, toggleCheck }) => {
  const bracketedCount = `(${count})`;
  return (
    <>
      <div className={styles.container}>
        <input type="checkbox" checked={checked} readOnly />
        <span className={styles.checkmark} onClick={toggleCheck} onKeyDown={toggleCheck} />
      </div>
      <div
        className={cx(styles.label, hasChildren ? styles.expandable : styles.nonExpandable)}
        onClick={toggleExpand}
        onKeyDown={toggleExpand}>
        {name} {bracketedCount}
        {hasChildren ? (
          <span className={expanded ? styles.collapseIcon : styles.expandIcon}>
            {expanded ? messages.common.minus : messages.common.plus}
          </span>
        ) : undefined}
      </div>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  hasChildren: PropTypes.bool,
  expanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  toggleCheck: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  hasChildren: false,
};

export default React.memo(Checkbox);
