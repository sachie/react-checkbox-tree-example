/**
 * Function to convert the flat category data to a tree structure.
 */
export default (categories, parent) => {
  // Make a reference object for direct access using ID.
  const categoryReference = {};
  categories.forEach(category => {
    categoryReference[category.id] = { ...category, children: [] };
  });

  // Pushes children into their respective parents in the categoryReference object.
  const categoryMap = [];
  categories.forEach(category => {
    if (category.parent !== parent) {
      if (categoryReference[category.parent] /** Avoids any dangling children (1 was found). */) {
        categoryReference[category.parent].children.push(categoryReference[category.id]);
      }
    } else {
      // Pushes the highest level categories into the categoryMap.
      categoryMap.push(categoryReference[category.id]);
    }
  });
  return categoryMap;
};
