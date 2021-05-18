import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChecklistControls from 'components/ChecklistControls';
import ChecklistItem from 'components/ChecklistItem';
import convertToList from 'utils/convertToList';
import messages from 'utils/messages';
import styles from './checklist.module.scss';

/**
 * Main Checklist page, includes the checklist and a selected item display.
 */
const Checklist = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState({});

  // Selects all categories.
  const selectAll = () => {
    const updatedSelection = categories.reduce((acc, category) => {
      convertToList(category).forEach(categoryToAdd => {
        acc[categoryToAdd.id] = categoryToAdd;
      });
      return acc;
    }, {});
    setSelectedCategories(updatedSelection);
  };

  // Clears selected list.
  const removeAll = () => setSelectedCategories({});

  // Adds a category to the selection if not already there, otherwise removes.
  const toggleSelection = clickedCategory => {
    const updatedSelection = { ...selectedCategories };
    const flatCategories = convertToList(clickedCategory);

    if (!updatedSelection[clickedCategory.id]) {
      flatCategories.forEach(category => {
        updatedSelection[category.id] = category;
      });
    } else {
      flatCategories.forEach(category => {
        delete updatedSelection[category.id];
      });
    }
    setSelectedCategories(updatedSelection);
  };

  return (
    <div className={styles.container}>
      <div className={styles.checklist}>
        <div className={styles.controls}>
          <h2>{messages.common.title}</h2>
          <ChecklistControls selectAll={selectAll} removeAll={removeAll} />
        </div>
        {categories.map(category => (
          <ChecklistItem
            key={category.id}
            category={category}
            toggleSelection={toggleSelection}
            selectedCategories={selectedCategories}
          />
        ))}
      </div>
      <div className={styles.display}>
        <h3>{messages.common.selectedCategories}</h3>
        <code>{JSON.stringify(selectedCategories, undefined, 2)}</code>
      </div>
    </div>
  );
};

Checklist.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

Checklist.defaultProps = {
  categories: [],
};

export default React.memo(Checklist);
