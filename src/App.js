import Checklist from 'pages/Checklist';
import convertToTree from 'utils/convertToTree';
import responses from './data/responses';

const ROOT_CATEGORY_ID = '0';

// Converts the responses json to a tree structure.
// This can be done in a saga if it was fetched from an API.
const structuredCategories = convertToTree(responses.data.categories, ROOT_CATEGORY_ID);

/**
 * Main app component.
 * Renders the rest of the application.
 */
function App() {
  return <Checklist categories={structuredCategories} />;
}

export default App;
