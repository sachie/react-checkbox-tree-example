// Function to convert a tree structure to a list.
export default rootCategory => {
  const categoriesToCheck = [rootCategory];
  const flatCategories = [];

  // Takes each item from categoriesToCheck and adds them to the list.
  while (categoriesToCheck.length > 0) {
    const category = { ...categoriesToCheck.pop() };
    // If the category has children, they're added to categoriesToCheck for processing.
    if (category.children.length > 0) {
      category.children.forEach(childCategory => categoriesToCheck.push(childCategory));
    }
    // Removes the children attribute for a cleaner flat list.
    delete category.children;
    flatCategories.push(category);
  }

  return flatCategories;
};
