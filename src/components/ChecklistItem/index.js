import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import styles from './checklistItem.module.scss';

/**
 * Component for a single checklist item.
 * (Recursive component)
 */
const ChecklistItem = ({ category, child, toggleSelection, selectedCategories }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    // Adds a "child" style if this item is a child.
    <div className={child ? styles.child : undefined}>
      <Checkbox
        name={category.name}
        count={category.count}
        hasChildren={category.children.length > 0}
        expanded={expanded}
        checked={!!selectedCategories[category.id]}
        toggleExpand={toggleExpand}
        toggleCheck={() => toggleSelection(category)}
      />
      {expanded && category.children.length > 0
        ? category.children.map(childCategory => (
            /** Recursively uses itself if children are available */
            <ChecklistItem
              child
              key={childCategory.id}
              category={childCategory}
              toggleSelection={toggleSelection}
              selectedCategories={selectedCategories}
            />
          ))
        : undefined}
    </div>
  );
};

ChecklistItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    count: PropTypes.number,
    parent: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  child: PropTypes.bool,
  toggleSelection: PropTypes.func.isRequired,
  selectedCategories: PropTypes.objectOf(PropTypes.object).isRequired,
};

ChecklistItem.defaultProps = {
  child: false,
};

export default React.memo(ChecklistItem);
